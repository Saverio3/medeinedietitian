import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicesIndex' });
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function ServicesIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('servicesIndex');
  const tHome = await getTranslations('home.services');
  const services = tHome.raw('items') as Array<{
    slug: string;
    tag: string;
    title: string;
    description: string;
    cta: string;
  }>;

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
            <p className="reveal reveal-4 mt-6 text-charcoal-500">{t('intro')}</p>
          </div>
        </div>
      </section>

      {/* Service cards — larger, more detailed than home */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service, i) => {
              const href = `/services/${service.slug}`;
              const accentClass =
                i === 0 ? 'bg-sage-100 text-sage-700' : i === 1 ? 'bg-clay-100 text-clay-700' : 'bg-gold-400/15 text-gold-600';
              return (
                <Link
                  key={service.slug}
                  href={href}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-charcoal-700/8 bg-cream-100 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-charcoal-700/15 hover:shadow-2xl hover:shadow-charcoal-700/10 md:p-10"
                >
                  <div className="relative mb-6 flex h-10 items-center">
                    {service.tag && (
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${accentClass}`}
                      >
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h2 className="display relative text-3xl leading-tight text-charcoal-700 md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="relative mt-5 flex-1 leading-relaxed text-charcoal-500">
                    {service.description}
                  </p>
                  <div className="relative mt-10 flex items-center gap-2 text-sm font-medium text-charcoal-700 transition-colors group-hover:text-sage-600">
                    <span>{service.cta}</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-charcoal-700/8 bg-cream-200">
        <div className="container-narrow text-center">
          <h2 className="display text-balance text-4xl leading-[1.05] text-charcoal-700 md:text-5xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-charcoal-500 md:text-lg">
            {t('cta.subtitle')}
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-primary">
              {t('cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
