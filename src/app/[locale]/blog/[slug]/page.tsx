import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  const params: Array<{ locale: Locale; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of getAllSlugs(locale)) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  const t = await getTranslations('blog');

  const formattedDate = new Date(post.date).toLocaleDateString(locale === 'lt' ? 'lt-LT' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article>
      <div className="container-narrow pb-16 pt-12 md:pt-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-charcoal-500 transition-colors hover:text-sage-600"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('backToBlog')}
        </Link>

        {/* Category + meta */}
        <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-charcoal-400">
          <span className="rounded-full bg-sage-50 px-2.5 py-1 text-sage-700">
            {t(`filters.${post.category}`)}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formattedDate}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {t('readingTime', { minutes: post.readingTime })}
          </span>
        </div>

        {/* Title */}
        <h1 className="display text-balance text-4xl leading-[1.05] text-charcoal-700 md:text-5xl lg:text-6xl">
          {post.title}
        </h1>

        {/* Description */}
        <p className="mt-6 text-xl leading-relaxed text-charcoal-500">{post.description}</p>

        <hr className="my-12 hairline" />

        {/* Content */}
        <div className="prose-custom">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 rounded-3xl border border-charcoal-700/8 bg-cream-200 p-8 text-center md:p-12">
          <p className="font-serif text-xl italic text-charcoal-700 md:text-2xl">
            Questions about what you've read?
          </p>
          <Link href="/contact" className="btn btn-primary mt-6">
            Get in touch
          </Link>
        </div>
      </div>
    </article>
  );
}
