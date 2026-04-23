// src\app\[locale]\about\page.tsx

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');
  const paragraphs = t.raw('story.paragraphs') as string[];
  const values = t.raw('values.items') as Array<{
    number: string;
    title: string;
    description: string;
  }>;
  const credentials = t.raw('credentials.items') as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-12 md:pt-20">
        <div className="container-wide">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="reveal reveal-1">
                <SectionEyebrow>{t('hero.eyebrow')}</SectionEyebrow>
              </div>
              <h1 className="display reveal reveal-2 mt-6 text-balance text-5xl leading-[1.02] text-charcoal-700 md:text-6xl lg:text-[5rem]">
                {t('hero.title')}
              </h1>
              <p className="reveal reveal-3 mt-8 max-w-xl text-lg leading-relaxed text-charcoal-500 md:text-xl">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="reveal reveal-2 relative lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-charcoal-700/10">
                {/* BACKUP — previous stock image (kept for reference)
                <Image
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=85"
                  alt="Warm lifestyle moment"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sage-900/15 via-transparent to-clay-500/15 mix-blend-multiply" />
                */}
                <Image
                  src="/images/medeine-portrait.jpg"
                  alt="Medeinė Deginaitė, Registered Dietitian specialising in fertility and women's health"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section border-t border-charcoal-700/8 bg-cream-200 grain">
        <div className="container-narrow">
          <h2 className="display text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('story.heading')}
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-charcoal-600 md:text-[1.2rem] md:leading-[1.7]">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-pretty">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-wide">
          <div className="mb-14 max-w-2xl">
            <SectionEyebrow>{t('values.eyebrow')}</SectionEyebrow>
            <h2 className="display mt-5 text-balance text-4xl leading-[1.1] text-charcoal-700 md:text-5xl">
              {t('values.heading')}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-charcoal-700/8 bg-cream-100 p-8 transition-all duration-500 hover:border-sage-300 hover:shadow-lg hover:shadow-charcoal-700/5 md:p-10"
              >
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sage-100 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                  aria-hidden
                />
                <span className="relative font-serif text-4xl italic text-sage-600">
                  {v.number}
                </span>
                <h3 className="display relative mt-6 text-2xl leading-tight text-charcoal-700">
                  {v.title}
                </h3>
                <p className="relative mt-4 text-[0.95rem] leading-relaxed text-charcoal-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section border-y border-charcoal-700/8 bg-charcoal-700 text-cream-100">
        <div className="container-narrow">
          <h2 className="display text-balance text-3xl leading-[1.1] text-cream-100 md:text-4xl">
            {t('credentials.heading')}
          </h2>
          <ul className="mt-10 space-y-4">
            {credentials.map((c, i) => (
              <li key={i} className="flex items-start gap-4 border-b border-cream-100/10 pb-4 text-lg">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage-600">
                  <Check className="h-3 w-3 text-cream-100" strokeWidth={3} />
                </div>
                <span className="text-cream-200/95">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow text-center">
          <h2 className="display text-balance text-4xl leading-[1.05] text-charcoal-700 md:text-5xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-charcoal-500 md:text-lg">
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
