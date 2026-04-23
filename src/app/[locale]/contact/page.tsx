import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Mail, Clock, MapPin, Languages } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';
import ContactForm from '@/components/ContactForm';
import BookingEmbed from '@/components/BookingEmbed';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-12 md:pt-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="reveal reveal-1">
              <SectionEyebrow>{t('hero.eyebrow')}</SectionEyebrow>
            </div>
            <h1 className="display reveal reveal-2 mt-6 text-balance text-5xl leading-[1.02] text-charcoal-700 md:text-6xl lg:text-[4.5rem]">
              {t('hero.title')}
            </h1>
            <p className="reveal reveal-3 mt-8 text-lg leading-relaxed text-charcoal-500 md:text-xl">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="overflow-hidden rounded-[2rem] border border-charcoal-700/8 bg-cream-100 p-8 md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="display text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl">
                  {t('booking.heading')}
                </h2>
                <p className="mt-5 text-charcoal-500 leading-relaxed">{t('booking.subtitle')}</p>
                <div className="mt-8 space-y-4">
                  <ContactDetail
                    icon={Clock}
                    label={t('details.hoursLabel')}
                    value={t('details.hoursValue')}
                  />
                  <ContactDetail
                    icon={MapPin}
                    label={t('details.locationLabel')}
                    value={t('details.locationValue')}
                  />
                  <ContactDetail
                    icon={Languages}
                    label={t('details.languagesLabel')}
                    value={t('details.languagesValue')}
                  />
                  <ContactDetail
                    icon={Mail}
                    label={t('details.emailLabel')}
                    value={siteConfig.contact.email}
                    href={`mailto:${siteConfig.contact.email}`}
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <BookingEmbed cta={t('booking.cta')} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section border-t border-charcoal-700/8 bg-cream-200 grain">
        <div className="container-narrow">
          <div className="mb-10">
            <h2 className="display text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl">
              {t('form.heading')}
            </h2>
            <p className="mt-4 text-charcoal-500 leading-relaxed">{t('form.subtitle')}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-sage-50">
        <Icon className="h-4 w-4 text-sage-600" strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.18em] text-charcoal-400">{label}</div>
        <div className="mt-1 text-sm text-charcoal-700">{value}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-3 transition-opacity hover:opacity-70">
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-3">{content}</div>;
}
