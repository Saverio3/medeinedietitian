'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost, BlogCategory } from '@/lib/blog';

const CATEGORIES: Array<BlogCategory | 'all'> = [
  'all',
  'fertility',
  'weightLoss',
  'glp1',
  'womensHealth',
  'nutrition',
  'recipes',
];

export default function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const t = useTranslations('blog');
  const [active, setActive] = useState<BlogCategory | 'all'>('all');

  const filtered = active === 'all' ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Filter bar */}
      <div className="mb-10 -mx-4 overflow-x-auto px-4 no-scrollbar">
        <div className="flex gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? 'border-sage-600 bg-sage-600 text-cream-100'
                    : 'border-charcoal-700/15 bg-cream-100 text-charcoal-600 hover:border-charcoal-700/30'
                }`}
              >
                {t(`filters.${cat}`)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} categoryLabel={t(`filters.${post.category}`)} readingTimeLabel={t('readingTime', { minutes: post.readingTime })} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-xl rounded-3xl border border-charcoal-700/8 bg-cream-200 p-12 text-center">
          <p className="text-charcoal-500">{t('empty.body')}</p>
        </div>
      )}
    </>
  );
}

function PostCard({
  post,
  categoryLabel,
  readingTimeLabel,
}: {
  post: BlogPost;
  categoryLabel: string;
  readingTimeLabel: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal-700/8 bg-cream-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-charcoal-700/10"
    >
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-charcoal-400">
          <span className="rounded-full bg-sage-50 px-2.5 py-1 text-sage-700">
            {categoryLabel}
          </span>
          <span>·</span>
          <span>{readingTimeLabel}</span>
        </div>
        <h3 className="display text-2xl leading-tight text-charcoal-700 group-hover:text-sage-700">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-charcoal-500">
          {post.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-charcoal-700">
          <span>Read more</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </div>
      </div>
    </Link>
  );
}
