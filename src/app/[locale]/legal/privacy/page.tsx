import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.privacy' });
  return {
    title: t('title'),
    robots: { index: false },
  };
}

const LAST_UPDATED = 'April 2026';

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');

  return (
    <section className="section">
      <div className="container-narrow">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="display mt-5 text-balance text-4xl leading-tight text-charcoal-700 md:text-5xl lg:text-6xl">
          {t('privacy.title')}
        </h1>
        <p className="mt-6 text-sm text-charcoal-400">
          {t('privacy.lastUpdated')}: {LAST_UPDATED}
        </p>

        {/* Lithuanian users notice */}
        {locale === 'lt' && (
          <div className="mt-8 rounded-2xl border border-sage-200 bg-sage-50 p-5 text-sm text-charcoal-600">
            {t('languageNotice')}
          </div>
        )}

        <div className="prose-custom mt-12">
          <p>
            This privacy policy describes how{' '}
            <strong>{siteConfig.name}</strong> (referred to as "we", "our", or
            "the practice") collects, uses, and protects personal information
            you provide through this website (
            <a href={siteConfig.url}>{siteConfig.domain}</a>) and when using
            dietetic services.
          </p>
          <p>
            We are committed to protecting your privacy in accordance with the
            UK General Data Protection Regulation (UK GDPR), the Data
            Protection Act 2018, and the standards expected of Health and Care
            Professions Council (HCPC) registrants.
          </p>

          <h2>1. Who we are</h2>
          <p>
            <strong>{siteConfig.name}</strong> is the data controller for
            personal information collected through this website and in the
            course of providing private dietetic services. The practice is run
            by a dietitian registered with the HCPC and is a full member of the
            British Dietetic Association (BDA).
          </p>
          <p>
            To contact us about anything in this policy, email{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>

          <h2>2. What information we collect</h2>
          <p>We collect and process personal information in three contexts:</p>
          <h3>Website enquiries (contact form)</h3>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>The subject and content of your message</li>
            <li>
              Your IP address (automatically logged for security and
              rate-limiting purposes)
            </li>
          </ul>

          <h3>Bookings</h3>
          <p>
            Bookings are taken via Cal.com. Cal.com collects your name, email
            address, time zone, and any questionnaire answers required to
            prepare for your session. Please see Cal.com's own privacy policy
            for how they handle this information.
          </p>

          <h3>Clinical records (clients only)</h3>
          <p>
            When you become a client, we collect additional information
            necessary for safe and effective dietetic care, including: health
            history, current medications, dietary history, relevant
            investigation results, goals and progress notes, and communication
            records. This information is held in secure electronic systems and
            is treated as confidential clinical information.
          </p>

          <h2>3. Lawful basis for processing</h2>
          <ul>
            <li>
              <strong>Contract:</strong> to provide the services you have
              booked and paid for.
            </li>
            <li>
              <strong>Consent:</strong> for marketing communications (you can
              withdraw this at any time).
            </li>
            <li>
              <strong>Legitimate interests:</strong> to respond to enquiries, to
              secure our website, and to run our practice.
            </li>
            <li>
              <strong>Legal obligation:</strong> for tax and accounting records.
            </li>
            <li>
              <strong>Vital interests / health:</strong> for clinical records,
              we rely on the special-category condition for the provision of
              health or social care and treatment by a health professional
              (UK GDPR Article 9(2)(h)).
            </li>
          </ul>

          <h2>4. How we use your information</h2>
          <ul>
            <li>To reply to enquiries and arrange consultations</li>
            <li>To provide dietetic assessment, planning, and follow-up care</li>
            <li>To send you written session summaries and educational resources</li>
            <li>To take payment for services (via Stripe)</li>
            <li>To maintain clinical records as required by HCPC standards</li>
            <li>To meet legal, tax, and regulatory obligations</li>
          </ul>

          <h2>5. Who we share your information with</h2>
          <p>
            We do not sell your information, ever. We only share it with the
            small number of service providers necessary to run the practice,
            and only where contracts and data protection arrangements are in
            place:
          </p>
          <ul>
            <li>
              <strong>Cal.com</strong> — appointment scheduling
            </li>
            <li>
              <strong>Stripe</strong> — secure payment processing
            </li>
            <li>
              <strong>Resend</strong> — delivering contact-form emails to our
              inbox
            </li>
            <li>
              <strong>Vercel</strong> — website hosting and privacy-friendly
              analytics
            </li>
            <li>
              <strong>Google Workspace / email provider</strong> — our email inbox
            </li>
          </ul>
          <p>
            Where required by law, or where there is a genuine safeguarding
            concern, we may share information with relevant authorities or your
            GP. Wherever possible we will discuss this with you first.
          </p>

          <h2>6. International transfers</h2>
          <p>
            Some of our service providers process data outside the UK,
            including in the European Economic Area and the United States.
            Where this is the case, we rely on UK-approved safeguards such as
            International Data Transfer Agreements or Adequacy Decisions to
            ensure your information remains protected.
          </p>

          <h2>7. How long we keep your information</h2>
          <ul>
            <li>
              <strong>Website enquiries</strong> that do not become clients —
              deleted within 12 months.
            </li>
            <li>
              <strong>Clinical records</strong> — retained for 8 years after
              your last consultation, in line with BDA and NHS guidance on
              dietetic records.
            </li>
            <li>
              <strong>Financial records</strong> — retained for 6 years as
              required by HMRC.
            </li>
          </ul>

          <h2>8. Your rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>
              Request erasure (with limits — clinical records must be retained
              for the period above)
            </li>
            <li>Restrict or object to processing</li>
            <li>Data portability for information you provided to us</li>
            <li>Withdraw consent at any time where we relied on it</li>
            <li>
              Complain to the Information Commissioner's Office (ICO) at{' '}
              <a href="https://ico.org.uk">ico.org.uk</a>
            </li>
          </ul>
          <p>
            To exercise any of these rights, please email{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>

          <h2>9. Cookies and analytics</h2>
          <p>
            This website does <strong>not</strong> use cookies for tracking,
            advertising, or profiling. We use Vercel Analytics, which is
            privacy-friendly and does not use cookies or collect personally
            identifiable information. Only minimal, aggregated page-view data
            is collected to understand how the site is used.
          </p>
          <p>
            If we introduce any cookie-based tracking in future, we will update
            this policy and ask for your consent via a banner before anything
            non-essential is set.
          </p>

          <h2>10. Security</h2>
          <p>
            We take the security of your information seriously. Our website is
            served over HTTPS. Clinical information is held in dedicated
            healthcare systems with encryption at rest and in transit. Access
            to client data is limited to the practitioner.
          </p>

          <h2>11. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The "last updated"
            date above will reflect the current version.
          </p>
        </div>
      </div>
    </section>
  );
}
