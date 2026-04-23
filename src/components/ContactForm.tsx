'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      consent: formData.get('consent') === 'on',
      // Honeypot — real users won't fill this
      company: String(formData.get('company') || '').trim(),
    };

    // Client validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = t('required');
    if (!data.email) newErrors.email = t('required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = t('invalidEmail');
    if (!data.message) newErrors.message = t('required');
    if (!data.consent) newErrors.consent = t('required');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Honeypot filled → silently ignore
    if (data.company) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-sage-300 bg-sage-50 p-10 text-center">
        <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage-600 text-cream-100">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <p className="font-serif text-2xl text-charcoal-700">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company">Company (leave blank)</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field id="name" label={t('name')} placeholder={t('namePlaceholder')} error={errors.name} required />
        <Field id="email" type="email" label={t('email')} placeholder={t('emailPlaceholder')} error={errors.email} required />
      </div>

      <Field id="subject" label={t('subject')} placeholder={t('subjectPlaceholder')} error={errors.subject} />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal-700">
          {t('message')} <span className="text-clay-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder={t('messagePlaceholder')}
          aria-invalid={!!errors.message}
          className={`mt-2 w-full resize-none rounded-2xl border bg-cream-100 px-4 py-3 text-charcoal-700 placeholder-charcoal-300 transition-colors focus:outline-none focus:ring-2 ${
            errors.message
              ? 'border-clay-500 focus:border-clay-500 focus:ring-clay-200'
              : 'border-charcoal-700/15 focus:border-sage-500 focus:ring-sage-200'
          }`}
        />
        {errors.message && <p className="mt-2 text-xs text-clay-600">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-charcoal-700/30 accent-sage-600"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-charcoal-500">
          {t('consent')}
        </label>
      </div>
      {errors.consent && <p className="text-xs text-clay-600">{errors.consent}</p>}

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-2xl border border-clay-300 bg-clay-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-600" />
          <p className="text-sm text-clay-700">{t('error')}</p>
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {status === 'submitting' ? t('submitting') : t('submit')}
          {status !== 'submitting' && <Send className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  type = 'text',
  label,
  placeholder,
  error,
  required,
}: {
  id: string;
  type?: string;
  label: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-charcoal-700">
        {label} {required && <span className="text-clay-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        autoComplete={type === 'email' ? 'email' : id === 'name' ? 'name' : 'off'}
        className={`mt-2 w-full rounded-2xl border bg-cream-100 px-4 py-3 text-charcoal-700 placeholder-charcoal-300 transition-colors focus:outline-none focus:ring-2 ${
          error
            ? 'border-clay-500 focus:border-clay-500 focus:ring-clay-200'
            : 'border-charcoal-700/15 focus:border-sage-500 focus:ring-sage-200'
        }`}
      />
      {error && <p className="mt-2 text-xs text-clay-600">{error}</p>}
    </div>
  );
}
