import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRight, Check, Sparkle } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'weightLoss' });
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function WeightLossPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('weightLoss');
  const glp1Items = t.raw('glp1Support.items') as Array<{ title: string; description: string }>;
  const covers = t.raw('covers.items') as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-12 md:pt-20">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="reveal reveal-1">
                <SectionEyebrow theme="clay">{t('hero.eyebrow')}</SectionEyebrow>
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
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=85"
                  alt="Colourful vegetables"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-clay-900/15 via-transparent to-sage-500/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLP-1 spotlight */}
      <section className="section border-t border-charcoal-700/8 bg-cream-200 grain">
        <div className="container-narrow">
          <SectionEyebrow theme="clay">{t('glp1.eyebrow')}</SectionEyebrow>
          <h2 className="display mt-5 text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('glp1.heading')}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal-600 md:text-[1.18rem]">
            <p className="text-pretty">{t('glp1.body1')}</p>
            <p className="text-pretty">{t('glp1.body2')}</p>
          </div>
        </div>
      </section>

      {/* GLP-1 support areas */}
      <section className="section">
        <div className="container-wide">
          <h2 className="display mb-14 max-w-2xl text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('glp1Support.heading')}
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {glp1Items.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-charcoal-700/8 bg-cream-100 p-8 transition-all duration-500 hover:border-clay-300 hover:shadow-lg hover:shadow-charcoal-700/5"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-clay-50 transition-colors group-hover:bg-clay-100">
                  <Sparkle className="h-4 w-4 text-clay-500" strokeWidth={1.5} />
                </div>
                <h3 className="display text-2xl leading-tight text-charcoal-700">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond GLP-1 */}
      <section className="section border-y border-charcoal-700/8 bg-charcoal-700 text-cream-100">
        <div className="container-narrow">
          <div className="eyebrow text-gold-400">{t('beyond.eyebrow')}</div>
          <h2 className="display mt-5 text-balance text-3xl leading-[1.1] text-cream-100 md:text-4xl lg:text-5xl">
            {t('beyond.heading')}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-200/90">
            {t('beyond.body')}
          </p>
        </div>
      </section>

      {/* What's covered */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="display text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl">
            {t('covers.heading')}
          </h2>
          <ul className="mt-10 space-y-4">
            {covers.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-b border-charcoal-700/8 pb-4 text-charcoal-600 md:text-lg"
              >
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-clay-100">
                  <Check className="h-3 w-3 text-clay-600" strokeWidth={3} />
                </div>
                <span>{c}</span>
              </li>
            ))}
          </ul>
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
            <Link href="/contact" className="btn btn-clay">
              {t('cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
