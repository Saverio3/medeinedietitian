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
  const t = await getTranslations({ locale, namespace: 'fertility' });
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function FertilityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('fertility');
  const supports = t.raw('supports.items') as Array<{ title: string; description: string }>;
  const steps = t.raw('approach.steps') as Array<{ title: string; description: string }>;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-12 md:pt-20">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
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
            <div className="reveal reveal-2 relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=900&q=85"
                  alt="Fresh seasonal produce"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sage-900/10 via-transparent to-clay-500/15 mix-blend-multiply" />
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
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal-600 md:text-[1.18rem]">
            <p className="text-pretty">{t('intro.body1')}</p>
            <p className="text-pretty">{t('intro.body2')}</p>
          </div>
        </div>
      </section>

      {/* Supports */}
      <section className="section">
        <div className="container-wide">
          <h2 className="display mb-14 max-w-2xl text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('supports.heading')}
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supports.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-charcoal-700/8 bg-cream-100 p-7 transition-all duration-500 hover:border-sage-300 hover:shadow-lg hover:shadow-charcoal-700/5"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 transition-colors group-hover:bg-sage-100">
                  <Sparkle className="h-4 w-4 text-sage-600" strokeWidth={1.5} />
                </div>
                <h3 className="display text-xl leading-tight text-charcoal-700 md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section border-y border-charcoal-700/8 bg-cream-200">
        <div className="container-wide">
          <h2 className="display mb-14 max-w-2xl text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('approach.heading')}
          </h2>
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col rounded-3xl border border-charcoal-700/8 bg-cream-100 p-8 lg:p-10"
              >
                <span className="font-serif text-5xl italic text-sage-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display mt-6 text-2xl leading-tight text-charcoal-700">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-charcoal-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className="relative overflow-hidden bg-sage-900 text-cream-100">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top right, rgba(201, 165, 112, 0.15), transparent 60%), radial-gradient(ellipse at bottom left, rgba(122, 155, 118, 0.2), transparent 60%)',
          }}
        />
        <div className="container-narrow relative py-24 lg:py-28">
          <div className="eyebrow text-gold-400">{t('personal.heading')}</div>
          <p className="display mt-6 text-balance text-2xl leading-[1.3] text-cream-100 md:text-3xl lg:text-4xl">
            {t('personal.body')}
          </p>
          <p className="mt-10 font-serif italic text-gold-400">— Medeinė</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
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
