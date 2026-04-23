'use client';

import { useState, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  pregnancyFoods,
  CATEGORIES,
  type PregnancyFood,
  type Verdict,
  type FoodCategory,
} from '@/content/pregnancy-foods';
import { Search, CheckCircle2, AlertCircle, XCircle, ArrowUpRight, X } from 'lucide-react';

type VerdictFilter = 'all' | Verdict;

export default function FoodChecker() {
  const t = useTranslations('foodChecker');
  const locale = useLocale();
  const [query, setQuery] = useState('');
  const [verdictFilter, setVerdictFilter] = useState<VerdictFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<FoodCategory | null>(null);

  const isLt = locale === 'lt';

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let results = pregnancyFoods;

    if (q.length > 0) {
      results = results.filter((food) => {
        const name = isLt ? food.nameLt : food.name;
        const aliases = isLt ? food.aliasesLt || [] : food.aliases || [];
        const haystack = [name, ...aliases].join(' ').toLowerCase();
        return haystack.includes(q);
      });
    }

    if (verdictFilter !== 'all') {
      results = results.filter((f) => f.verdict === verdictFilter);
    }

    if (categoryFilter) {
      results = results.filter((f) => f.category === categoryFilter);
    }

    return results;
  }, [query, verdictFilter, categoryFilter, isLt]);

  const groupedByCategory = useMemo(() => {
    const groups: Record<FoodCategory, PregnancyFood[]> = {
      'fish-seafood': [],
      'cheese-dairy': [],
      meat: [],
      eggs: [],
      drinks: [],
      'herbs-supplements': [],
      'fruits-vegetables': [],
      other: [],
    };
    filtered.forEach((food) => {
      groups[food.category].push(food);
    });
    return groups;
  }, [filtered]);

  const hasActiveFilters = verdictFilter !== 'all' || categoryFilter !== null;

  return (
    <div>
      {/* Search + filter bar */}
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal-400"
            strokeWidth={1.75}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('hero.searchPlaceholder')}
            className="w-full rounded-full border border-charcoal-700/12 bg-cream-100 py-5 pl-14 pr-14 text-base text-charcoal-700 placeholder-charcoal-400 shadow-sm transition-colors focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200 md:text-lg"
            aria-label={t('hero.searchPlaceholder')}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-700/10 text-charcoal-500 transition-colors hover:bg-charcoal-700/20"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Verdict filter pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <FilterPill
            active={verdictFilter === 'all'}
            onClick={() => setVerdictFilter('all')}
          >
            {t('filters.all')}
          </FilterPill>
          <FilterPill
            active={verdictFilter === 'safe'}
            onClick={() => setVerdictFilter('safe')}
            tone="safe"
          >
            <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} />
            {t('filters.safeOnly')}
          </FilterPill>
          <FilterPill
            active={verdictFilter === 'limited'}
            onClick={() => setVerdictFilter('limited')}
            tone="limited"
          >
            <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
            {t('filters.limitedOnly')}
          </FilterPill>
          <FilterPill
            active={verdictFilter === 'avoid'}
            onClick={() => setVerdictFilter('avoid')}
            tone="avoid"
          >
            <XCircle className="h-3.5 w-3.5" strokeWidth={2} />
            {t('filters.avoidOnly')}
          </FilterPill>
        </div>

        {/* Category filter */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {(Object.keys(CATEGORIES) as FoodCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(categoryFilter === cat ? null : cat)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-all ${
                categoryFilter === cat
                  ? 'border-charcoal-700 bg-charcoal-700 text-cream-100'
                  : 'border-charcoal-700/15 bg-cream-100 text-charcoal-500 hover:border-charcoal-700/30'
              }`}
            >
              {isLt ? CATEGORIES[cat].lt : CATEGORIES[cat].en}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mt-8 text-center text-sm text-charcoal-400">
          {t('hero.resultsCount', { count: filtered.length })}
        </div>
      </div>

      {/* Results */}
      <div className="mt-10">
        {filtered.length === 0 ? (
          <div className="mx-auto max-w-lg rounded-3xl border border-charcoal-700/10 bg-cream-100 p-10 text-center">
            <h3 className="display text-2xl leading-tight text-charcoal-700">
              {t('noResults.title')}
            </h3>
            <p className="mt-4 text-charcoal-500 leading-relaxed">
              {t('noResults.subtitle')}
            </p>
          </div>
        ) : hasActiveFilters || query.trim().length > 0 ? (
          // Flat grid when filtered
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((food) => (
              <FoodCard key={food.slug} food={food} isLt={isLt} />
            ))}
          </div>
        ) : (
          // Grouped by category when showing everything
          <div className="space-y-14">
            {(Object.keys(CATEGORIES) as FoodCategory[]).map((cat) => {
              const items = groupedByCategory[cat];
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h2 className="display mb-6 text-balance text-2xl leading-tight text-charcoal-700 md:text-3xl">
                    {isLt ? CATEGORIES[cat].lt : CATEGORIES[cat].en}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((food) => (
                      <FoodCard key={food.slug} food={food} isLt={isLt} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterPill({
  children,
  active,
  onClick,
  tone,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  tone?: Verdict;
}) {
  let activeClass = 'border-charcoal-700 bg-charcoal-700 text-cream-100';
  if (active && tone === 'safe')
    activeClass = 'border-sage-600 bg-sage-600 text-cream-100';
  if (active && tone === 'limited')
    activeClass = 'border-gold-500 bg-gold-500 text-cream-100';
  if (active && tone === 'avoid')
    activeClass = 'border-clay-500 bg-clay-500 text-cream-100';

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
        active
          ? activeClass
          : 'border-charcoal-700/15 bg-cream-100 text-charcoal-600 hover:border-charcoal-700/30'
      }`}
    >
      {children}
    </button>
  );
}

function FoodCard({ food, isLt }: { food: PregnancyFood; isLt: boolean }) {
  const name = isLt ? food.nameLt : food.name;
  const summary = isLt ? food.summaryLt : food.summary;

  const verdictConfig = {
    safe: {
      label: isLt ? 'Saugu' : 'Safe',
      Icon: CheckCircle2,
      bgClass: 'bg-sage-50',
      borderClass: 'border-sage-200',
      textClass: 'text-sage-700',
      iconClass: 'text-sage-600',
      hoverBorder: 'hover:border-sage-400',
    },
    limited: {
      label: isLt ? 'Su apribojimais' : 'With limits',
      Icon: AlertCircle,
      bgClass: 'bg-gold-400/10',
      borderClass: 'border-gold-400/40',
      textClass: 'text-gold-600',
      iconClass: 'text-gold-500',
      hoverBorder: 'hover:border-gold-500',
    },
    avoid: {
      label: isLt ? 'Vengti' : 'Avoid',
      Icon: XCircle,
      bgClass: 'bg-clay-50',
      borderClass: 'border-clay-200',
      textClass: 'text-clay-700',
      iconClass: 'text-clay-500',
      hoverBorder: 'hover:border-clay-400',
    },
  };

  const config = verdictConfig[food.verdict];
  const Icon = config.Icon;

  return (
    <Link
      // @ts-expect-error typed routes
      href={`/tools/pregnancy-food-checker/${food.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border ${config.borderClass} bg-cream-100 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal-700/10 ${config.hoverBorder}`}
    >
      {/* Verdict badge */}
      <div
        className={`inline-flex w-fit items-center gap-1.5 rounded-full ${config.bgClass} px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] ${config.textClass}`}
      >
        <Icon className={`h-3 w-3 ${config.iconClass}`} strokeWidth={2.5} />
        <span>{config.label}</span>
      </div>

      <h3 className="font-serif mt-4 text-xl leading-tight text-charcoal-700 md:text-2xl">
        {name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">
        {summary}
      </p>

      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-charcoal-500 transition-colors group-hover:text-sage-600">
        <span>{isLt ? 'Skaityti daugiau' : 'Read more'}</span>
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      </div>
    </Link>
  );
}