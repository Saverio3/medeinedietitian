import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRight, Sparkle } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'womensHealth' });
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function WomensHealthPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('womensHealth');
  const areas = t.raw('areas.items') as Array<{ title: string; description: string }>;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-12 md:pt-20">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="reveal reveal-1">
                <SectionEyebrow theme="gold">{t('hero.eyebrow')}</SectionEyebrow>
              </div>
              <h1 className="display reveal reveal-2 mt-6 text-balance text-5xl leading-[1.02] text-charcoal-700 md:text-6xl lg:text-[4.5rem]">
                {t('hero.title')}
              </h1>
              <p className="reveal reveal-3 mt-8 text-lg leading-relaxed text-charcoal-500 md:text-xl">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="reveal reveal-2 relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&q=85"
                  alt="Calm still life"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-sage-500/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section border-t border-charcoal-700/8 bg-cream-200 grain">
        <div className="container-narrow">
          <h2 className="display text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('intro.heading')}
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-charcoal-600 md:text-[1.18rem]">
            {t('intro.body')}
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="section">
        <div className="container-wide">
          <h2 className="display mb-14 max-w-2xl text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('areas.heading')}
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {areas.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-charcoal-700/8 bg-cream-100 p-8 transition-all duration-500 hover:border-sage-300 hover:shadow-lg hover:shadow-charcoal-700/5"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/10 transition-colors group-hover:bg-gold-400/20">
                  <Sparkle className="h-4 w-4 text-gold-600" strokeWidth={1.5} />
                </div>
                <h3 className="display text-2xl leading-tight text-charcoal-700">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal-500">{item.description}</p>
              </div>
            ))}
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
