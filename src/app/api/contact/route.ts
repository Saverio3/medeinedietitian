import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

/**
 * Contact form submission handler.
 * Uses Resend (https://resend.com) — free tier: 100 emails/day, 3,000/month.
 * Set RESEND_API_KEY in your .env.local (and in Vercel env vars) to enable.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: boolean;
  company?: string; // honeypot
};

function sanitize(input: string): string {
  return input.replace(/[<>]/g, '').slice(0, 5000).trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

// Simple in-memory rate limiter (resets on cold start — good enough for small practice)
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 5; // per hour per IP
const RATE_WINDOW = 60 * 60 * 1000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const record = submissions.get(ip) || [];
  const recent = record.filter((t) => now - t < RATE_WINDOW);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (rateLimited(ip)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const body: Body = await request.json();

    // Honeypot
    if (body.company && body.company.length > 0) {
      return NextResponse.json({ ok: true });
    }

    // Validation
    const name = sanitize(body.name || '');
    const email = sanitize(body.email || '');
    const subject = sanitize(body.subject || 'Website enquiry');
    const message = sanitize(body.message || '');

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    if (!body.consent) {
      return NextResponse.json({ error: 'Consent required' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured — contact form disabled.');
      return NextResponse.json(
        { error: 'Contact form not configured. Please email directly.' },
        { status: 500 }
      );
    }

    // Resend sender — must be a verified domain in Resend, OR use their sandbox.
    // Default fallback uses Resend's onboarding sender; swap for verified domain after DNS setup.
    const from = process.env.RESEND_FROM || 'Website <onboarding@resend.dev>';
    const to = siteConfig.contact.inboxEmail;

    const emailBody = {
      from,
      to: [to],
      reply_to: email,
      subject: `[Website] ${subject}`,
      html: buildEmailHTML({ name, email, subject, message }),
      text: buildEmailText({ name, email, subject, message }),
    };

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend error:', errText);
      return NextResponse.json({ error: 'Email service error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

function buildEmailHTML({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const esc = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] || c));
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #FBF8F3; color: #2C2A28;">
      <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(44,42,40,0.1);">
        <div style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #4A6945;">New website message</div>
        <h1 style="margin: 8px 0 0; font-family: Georgia, serif; font-size: 24px; color: #2C2A28;">${esc(subject)}</h1>
      </div>
      <table style="width: 100%; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #9A938A; width: 80px;">From</td>
          <td style="padding: 8px 0;"><strong>${esc(name)}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #9A938A;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${esc(email)}" style="color: #4A6945;">${esc(email)}</a></td>
        </tr>
      </table>
      <div style="padding: 24px; background: white; border-radius: 12px; border: 1px solid rgba(44,42,40,0.08);">
        <p style="white-space: pre-wrap; line-height: 1.7; margin: 0;">${esc(message)}</p>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #9A938A;">Reply directly to this email to respond to ${esc(name)}.</p>
    </div>
  `;
}

function buildEmailText({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `New website message\n\nSubject: ${subject}\nFrom: ${name}\nEmail: ${email}\n\n---\n\n${message}\n\n---\nReply directly to this email to respond.`;
}
