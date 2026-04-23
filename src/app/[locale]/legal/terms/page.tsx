import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.terms' });
  return {
    title: t('title'),
    robots: { index: false },
  };
}

const LAST_UPDATED = 'April 2026';

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');

  return (
    <section className="section">
      <div className="container-narrow">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="display mt-5 text-balance text-4xl leading-tight text-charcoal-700 md:text-5xl lg:text-6xl">
          {t('terms.title')}
        </h1>
        <p className="mt-6 text-sm text-charcoal-400">
          {t('terms.lastUpdated')}: {LAST_UPDATED}
        </p>

        {locale === 'lt' && (
          <div className="mt-8 rounded-2xl border border-sage-200 bg-sage-50 p-5 text-sm text-charcoal-600">
            {t('languageNotice')}
          </div>
        )}

        <div className="prose-custom mt-12">
          <p>
            These terms govern the use of this website ({siteConfig.domain}) and
            any dietetic services booked through it. By using the website or
            booking a consultation, you agree to these terms. If you do not
            agree, please do not use the website or services.
          </p>

          <h2>1. About us</h2>
          <p>
            This website and practice are run by <strong>{siteConfig.name}</strong>,
            a dietitian registered with the Health and Care Professions Council
            (HCPC) and a full member of the British Dietetic Association
            (BDA). All services are provided by a qualified registered
            dietitian.
          </p>

          <h2>2. The service</h2>
          <p>
            We provide private nutritional and dietetic consultations, delivered
            online via video or phone. Consultations include a session with the
            dietitian, review of your history and goals, and a written plan
            delivered after the session.
          </p>
          <p>
            Advice is tailored to you as an individual. It is not a
            substitute for medical diagnosis, medical treatment, or urgent
            medical advice. If you are unwell, please contact your GP, NHS
            111, or emergency services as appropriate.
          </p>

          <h2>3. Booking and payment</h2>
          <ul>
            <li>
              Bookings are made through our booking system (Cal.com) and
              payment is taken at the point of booking via Stripe.
            </li>
            <li>
              Prices are in GBP (£) and include any applicable taxes.
            </li>
            <li>
              You must provide accurate contact details, relevant health
              history, and any information requested in the pre-session form.
            </li>
          </ul>

          <h2>4. Cancellations, reschedules, and refunds</h2>
          <ul>
            <li>
              Cancellations with <strong>more than 24 hours' notice</strong>{' '}
              will be refunded in full, or rescheduled at no cost.
            </li>
            <li>
              Cancellations with <strong>less than 24 hours' notice</strong>{' '}
              are non-refundable, but a single rescheduling is offered at no
              cost.
            </li>
            <li>
              If we need to reschedule for any reason, you will be offered a
              new time or a full refund.
            </li>
            <li>
              Package sessions must be used within the stated programme window.
            </li>
          </ul>

          <h2>5. Your responsibilities as a client</h2>
          <ul>
            <li>
              Provide accurate, complete information about your health,
              medications, and history.
            </li>
            <li>
              Tell us about any changes to your health or medications that
              occur during our work together.
            </li>
            <li>
              Take reasonable steps to follow the written plan agreed with us.
              If something isn't working, tell us — the plan can be changed.
            </li>
            <li>
              Continue to follow the advice of your GP, consultant, and other
              healthcare providers. Our work sits alongside their care, not
              instead of it.
            </li>
            <li>
              Treat the dietitian with respect. Abusive or threatening
              behaviour will end the therapeutic relationship without refund.
            </li>
          </ul>

          <h2>6. Medical disclaimer</h2>
          <p>
            Dietetic advice provided through this practice is for educational
            and supportive purposes alongside conventional medical care. It is
            not a diagnosis or treatment of any medical condition. If you have
            or suspect a medical problem, please consult your GP or specialist.
            In an emergency, contact 999 or 111 or attend the nearest A&amp;E.
          </p>
          <p>
            Any website content (articles, guides, blog posts) is for general
            information only and does not constitute personalised advice.
          </p>

          <h2>7. Professional standards and regulation</h2>
          <p>
            As an HCPC-registered dietitian, the practice operates according to
            the HCPC Standards of Conduct, Performance and Ethics, and BDA
            professional guidance. If you have a concern about the service
            provided, please raise it with us directly first. Formal
            complaints regarding professional conduct may also be made to the
            HCPC at{' '}
            <a href="https://www.hcpc-uk.org">hcpc-uk.org</a>.
          </p>

          <h2>8. Intellectual property</h2>
          <p>
            All content on this website — text, images, logos, written plans,
            resources — is the property of {siteConfig.name} or licensed to us.
            You may use personal plans and resources for your own health, but
            may not republish, resell, or redistribute them.
          </p>

          <h2>9. Liability</h2>
          <p>
            We carry full professional indemnity insurance for our private
            practice. Nothing in these terms limits liability for death,
            personal injury caused by negligence, fraud, or anything else
            that cannot be excluded under UK law.
          </p>
          <p>
            Subject to the above, our total liability for any claim arising
            from the service is limited to the amount you paid for the
            relevant session or package.
          </p>

          <h2>10. Geographic scope</h2>
          <p>
            Our regulated practice is based in the United Kingdom. We primarily
            see UK residents. International enquiries are considered case by
            case and may be declined if they fall outside our professional
            insurance scope.
          </p>

          <h2>11. Governing law</h2>
          <p>
            These terms are governed by the law of England and Wales. Any
            disputes will be subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </p>

          <h2>12. Changes to these terms</h2>
          <p>
            We may update these terms occasionally. The current version will
            always be available on this page with the date last updated.
          </p>

          <h2>13. Contact</h2>
          <p>
            For anything relating to these terms, please email{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
