import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import { pregnancyFoods } from '@/content/pregnancy-foods';
import SectionEyebrow from '@/components/SectionEyebrow';
import FoodChecker from '@/components/FoodChecker';
import FoodCheckerCTA from '@/components/FoodCheckerCTA';
import { Link } from '@/i18n/navigation';
import { BookOpen, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'foodChecker.meta' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/tools/pregnancy-food-checker',
      languages: {
        'en-GB': '/tools/pregnancy-food-checker',
        'lt-LT': '/lt/tools/pregnancy-food-checker',
      },
    },
  };
}

export default async function PregnancyFoodCheckerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('foodChecker');

  // Structured data — ItemList + each food as a FAQ-style entity
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('meta.title'),
    description: t('meta.description'),
    numberOfItems: pregnancyFoods.length,
    itemListElement: pregnancyFoods.map((food, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Thing',
        name: locale === 'lt' ? food.nameLt : food.name,
        description: locale === 'lt' ? food.summaryLt : food.summary,
        url: `${siteConfig.url}${locale === 'lt' ? '/lt' : ''}/tools/pregnancy-food-checker/${food.slug}`,
      },
    })),
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pregnancyFoods.slice(0, 20).map((food) => ({
      '@type': 'Question',
      name:
        locale === 'lt'
          ? `Ar ${food.nameLt.toLowerCase()} saugu nėštumo metu?`
          : `Is ${food.name.toLowerCase()} safe in pregnancy?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: locale === 'lt' ? food.explanationLt : food.explanation,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-12 md:pt-20">
        {/* Soft decorative background */}
        <svg
          className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] opacity-[0.06]"
          viewBox="0 0 500 500"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 250 40 C 360 40, 450 130, 460 240 C 470 350, 380 440, 260 450 C 140 460, 50 370, 50 260 C 50 150, 140 40, 250 40 Z"
            fill="rgb(122, 155, 118)"
          />
        </svg>

        <div className="container-wide relative">
          <div className="max-w-3xl">
            <div className="reveal reveal-1">
              <SectionEyebrow>{t('hero.eyebrow')}</SectionEyebrow>
            </div>
            <h1 className="display reveal reveal-2 mt-6 text-balance text-4xl leading-[1.05] text-charcoal-700 sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              <span className="block">{t('hero.title1')}</span>
              <span className="display-italic block text-sage-600">
                {t('hero.title2')}
              </span>
            </h1>
            <p className="reveal reveal-3 mt-8 text-lg leading-relaxed text-charcoal-500 md:text-xl">
              {t('hero.subtitle')}
            </p>

            {/* Trust markers */}
            <div className="reveal reveal-4 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-charcoal-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sage-600" strokeWidth={1.5} />
                <span>{t('authoredBy.label')} {t('authoredBy.name')} — {t('authoredBy.credentials')}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-sage-600" strokeWidth={1.5} />
                <span>Based on current NHS guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The interactive checker */}
      <section className="pb-20">
        <div className="container-wide">
          <FoodChecker />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="container-narrow">
          <div className="rounded-2xl border border-charcoal-700/10 bg-cream-200 p-6 text-sm leading-relaxed text-charcoal-500">
            <strong className="text-charcoal-700">Please note — </strong>
            {t('disclaimer')}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FoodCheckerCTA />
    </>
  );
}