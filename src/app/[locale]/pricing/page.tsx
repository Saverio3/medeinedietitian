import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Check } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';
import PricingFAQ from '@/components/PricingFAQ';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ locale: Locale }>;
};

type Session = {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

type Package = Session & { originalPrice?: string };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricing' });
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('pricing');
  const sessions = t.raw('sessions') as Session[];
  const packages = t.raw('packages') as Package[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pt-20">
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

      {/* Sessions */}
      <section className="pb-16">
        <div className="container-wide">
          <h2 className="display mb-10 text-balance text-3xl leading-tight text-charcoal-700 md:text-4xl">
            {t('sessionsHeading')}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {sessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section border-y border-charcoal-700/8 bg-cream-200 grain">
        <div className="container-wide">
          <div className="mb-10 max-w-2xl">
            <h2 className="display text-balance text-3xl leading-tight text-charcoal-700 md:text-4xl lg:text-5xl">
              {t('packagesHeading')}
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal-500 md:text-lg">
              {t('packagesSubtitle')}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="display mb-10 text-balance text-3xl leading-tight text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('faq.heading')}
          </h2>
          <PricingFAQ />
        </div>
      </section>
    </>
  );
}

function SessionCard({ session }: { session: Session }) {
  const bookingUrl = getBookingUrl(session.id);
  return (
    <div
      className={`flex flex-col rounded-3xl border p-6 transition-all duration-500 ${
        session.featured
          ? 'border-sage-500 bg-sage-50 shadow-lg shadow-sage-500/10'
          : 'border-charcoal-700/8 bg-cream-100 hover:border-charcoal-700/15 hover:shadow-lg hover:shadow-charcoal-700/5'
      }`}
    >
      <h3 className="font-serif text-xl leading-tight text-charcoal-700">{session.name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-serif text-4xl text-charcoal-700">{session.price}</span>
      </div>
      <div className="mt-1 text-sm text-charcoal-400">{session.duration}</div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-500">{session.description}</p>
      <ul className="mt-6 space-y-2.5">
        {session.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal-500">
            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sage-600" strokeWidth={2} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn mt-6 w-full text-sm ${
          session.featured ? 'btn-primary' : 'btn-secondary'
        }`}
      >
        {session.cta}
      </a>
    </div>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  const bookingUrl = getBookingUrl(pkg.id);
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 md:p-10 ${
        pkg.featured
          ? 'border-charcoal-700 bg-charcoal-700 text-cream-100 shadow-xl shadow-charcoal-700/20'
          : 'border-charcoal-700/8 bg-cream-100 hover:border-charcoal-700/15 hover:shadow-lg hover:shadow-charcoal-700/5'
      }`}
    >
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-clay-400 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-cream-100">
            Most popular
          </span>
        </div>
      )}
      <h3
        className={`font-serif text-2xl leading-tight ${pkg.featured ? 'text-cream-100' : 'text-charcoal-700'}`}
      >
        {pkg.name}
      </h3>
      <div className="mt-5 flex items-baseline gap-3">
        <span
          className={`font-serif text-5xl ${pkg.featured ? 'text-cream-100' : 'text-charcoal-700'}`}
        >
          {pkg.price}
        </span>
        {pkg.originalPrice && (
          <span
            className={`font-serif text-xl line-through ${
              pkg.featured ? 'text-cream-200/40' : 'text-charcoal-300'
            }`}
          >
            {pkg.originalPrice}
          </span>
        )}
      </div>
      <div
        className={`mt-1 text-sm ${pkg.featured ? 'text-cream-200/70' : 'text-charcoal-400'}`}
      >
        {pkg.duration}
      </div>
      <p
        className={`mt-5 flex-1 text-sm leading-relaxed ${
          pkg.featured ? 'text-cream-200/85' : 'text-charcoal-500'
        }`}
      >
        {pkg.description}
      </p>
      <ul className="mt-7 space-y-3">
        {pkg.features.map((feature, i) => (
          <li
            key={i}
            className={`flex items-start gap-2.5 text-sm ${
              pkg.featured ? 'text-cream-200/90' : 'text-charcoal-600'
            }`}
          >
            <Check
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                pkg.featured ? 'text-gold-400' : 'text-sage-600'
              }`}
              strokeWidth={2}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn mt-8 w-full ${
          pkg.featured
            ? 'bg-cream-100 text-charcoal-700 hover:bg-gold-400 hover:text-charcoal-700'
            : 'btn-primary'
        }`}
      >
        {pkg.cta}
      </a>
    </div>
  );
}

function getBookingUrl(id: string): string {
  const base = `https://cal.com/${siteConfig.booking.calUsername}`;
  switch (id) {
    case 'discovery':
      return `${base}/${siteConfig.booking.discoveryCallSlug}`;
    case 'initial':
      return `${base}/${siteConfig.booking.initialAssessmentSlug}`;
    case 'followup30':
      return `${base}/${siteConfig.booking.followUpSlug}`;
    default:
      // Packages and everything else — redirect to contact for now
      return `/contact`;
  }
}
