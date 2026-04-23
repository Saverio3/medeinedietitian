import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, CheckCircle2, AlertCircle, XCircle, BookOpen, Calendar } from 'lucide-react';
import {
  pregnancyFoods,
  getFoodBySlug,
  getAllFoodSlugs,
} from '@/content/pregnancy-foods';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';
import FoodCheckerCTA from '@/components/FoodCheckerCTA';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  const params: Array<{ locale: Locale; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of getAllFoodSlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const food = getFoodBySlug(slug);
  if (!food) return {};

  const isLt = locale === 'lt';
  const name = isLt ? food.nameLt : food.name;
  const summary = isLt ? food.summaryLt : food.summary;

  const title = isLt
    ? `Ar ${name.toLowerCase()} saugu nėštumo metu?`
    : `Is ${name} safe in pregnancy?`;

  return {
    title,
    description: summary,
    alternates: {
      canonical: `/tools/pregnancy-food-checker/${slug}`,
      languages: {
        'en-GB': `/tools/pregnancy-food-checker/${slug}`,
        'lt-LT': `/lt/tools/pregnancy-food-checker/${slug}`,
      },
    },
    openGraph: {
      title,
      description: summary,
      type: 'article',
    },
  };
}

export default async function FoodDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const food = getFoodBySlug(slug);
  if (!food) notFound();

  const t = await getTranslations('foodChecker');
  const isLt = locale === 'lt';

  const name = isLt ? food.nameLt : food.name;
  const summary = isLt ? food.summaryLt : food.summary;
  const explanation = isLt ? food.explanationLt : food.explanation;
  const reason = isLt ? food.reasonLt : food.reason;
  const source = isLt ? food.sourceLt : food.source;

  const verdictConfig = {
    safe: {
      label: t('verdicts.safeLong'),
      Icon: CheckCircle2,
      bg: 'bg-sage-50',
      border: 'border-sage-300',
      text: 'text-sage-700',
      accent: 'text-sage-600',
    },
    limited: {
      label: t('verdicts.limitedLong'),
      Icon: AlertCircle,
      bg: 'bg-gold-400/10',
      border: 'border-gold-400/50',
      text: 'text-gold-600',
      accent: 'text-gold-500',
    },
    avoid: {
      label: t('verdicts.avoidLong'),
      Icon: XCircle,
      bg: 'bg-clay-50',
      border: 'border-clay-300',
      text: 'text-clay-700',
      accent: 'text-clay-500',
    },
  };

  const config = verdictConfig[food.verdict];
  const Icon = config.Icon;

  // Find related foods — same category, not this one
  const related = pregnancyFoods
    .filter((f) => f.category === food.category && f.slug !== food.slug)
    .slice(0, 3);

  // Structured data for this specific Q&A
  const qaStructured = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: isLt
        ? `Ar ${name.toLowerCase()} saugu nėštumo metu?`
        : `Is ${name} safe in pregnancy?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: explanation,
        author: {
          '@type': 'Person',
          name: 'Medeinė Deginaitė',
          jobTitle: 'Registered Dietitian',
          url: siteConfig.url,
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaStructured) }}
      />

      <article>
        <div className="container-narrow pt-10 pb-16 md:pt-16">
          {/* Back link */}
          <Link
            href="/tools/pregnancy-food-checker"
            className="inline-flex items-center gap-2 text-sm text-charcoal-500 transition-colors hover:text-sage-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t('foodPage.backToChecker')}
          </Link>

          {/* Title */}
          <h1 className="display mt-8 text-balance text-4xl leading-[1.05] text-charcoal-700 md:text-5xl lg:text-6xl">
            {isLt
              ? `Ar ${name} saugu nėštumo metu?`
              : `Is ${name} safe in pregnancy?`}
          </h1>

          {/* Verdict banner */}
          <div
            className={`mt-10 flex items-start gap-5 rounded-3xl border-2 ${config.border} ${config.bg} p-6 md:p-8`}
          >
            <div
              className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cream-100 shadow-sm`}
            >
              <Icon className={`h-6 w-6 ${config.accent}`} strokeWidth={2} />
            </div>
            <div>
              <div
                className={`text-[11px] font-medium uppercase tracking-[0.15em] ${config.text}`}
              >
                {config.label}
              </div>
              <p className="mt-2 font-serif text-xl leading-snug text-charcoal-700 md:text-2xl">
                {summary}
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl leading-tight text-charcoal-700 md:text-3xl">
              {t('foodPage.whatTheEvidence')}
            </h2>
            <p className="prose-custom mt-5 text-lg leading-relaxed text-charcoal-600">
              {explanation}
            </p>
          </div>

          {/* Reason */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl leading-tight text-charcoal-700 md:text-3xl">
              {t('foodPage.whyItMatters')}
            </h2>
            <p className="prose-custom mt-5 text-lg leading-relaxed text-charcoal-600">
              {reason}
            </p>
          </div>

          {/* Meta row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-charcoal-700/10 bg-cream-200 px-6 py-4 text-sm text-charcoal-500">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-sage-600" strokeWidth={1.75} />
              <span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-charcoal-400 mr-2">
                  {t('foodPage.source')}:
                </span>
                {source}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-sage-600" strokeWidth={1.75} />
              <span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-charcoal-400 mr-2">
                  {t('foodPage.lastReviewed')}:
                </span>
                April 2026
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-2xl border border-charcoal-700/10 bg-cream-200 p-6 text-sm leading-relaxed text-charcoal-500">
            <strong className="text-charcoal-700">
              {isLt ? 'Svarbu — ' : 'Please note — '}
            </strong>
            {t('disclaimer')}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-2xl leading-tight text-charcoal-700 md:text-3xl">
                {t('foodPage.relatedFoods')}
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {related.map((r) => {
                  const rName = isLt ? r.nameLt : r.name;
                  const rSummary = isLt ? r.summaryLt : r.summary;
                  const rConfig = verdictConfig[r.verdict];
                  const RIcon = rConfig.Icon;
                  return (
                    <Link
                      key={r.slug}
                      href={`/tools/pregnancy-food-checker/${r.slug}`}
                      className="group flex flex-col rounded-2xl border border-charcoal-700/10 bg-cream-100 p-5 transition-all hover:-translate-y-0.5 hover:border-charcoal-700/20 hover:shadow-lg"
                    >
                      <RIcon className={`h-4 w-4 ${rConfig.accent}`} strokeWidth={2} />
                      <h3 className="font-serif mt-3 text-lg leading-tight text-charcoal-700">
                        {rName}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                        {rSummary}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <FoodCheckerCTA />
      </article>
    </>
  );
}