import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import SectionEyebrow from '@/components/SectionEyebrow';
import BlogFilter from '@/components/BlogFilter';
import { getAllPosts } from '@/lib/blog';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('blog');
  const posts = getAllPosts(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-12 md:pt-20">
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
          </div>
        </div>
      </section>

      {/* Filter + posts */}
      <section className="pb-24">
        <div className="container-wide">
          {posts.length > 0 ? (
            <BlogFilter posts={posts} />
          ) : (
            <div className="mx-auto max-w-2xl rounded-3xl border border-charcoal-700/8 bg-cream-200 p-12 text-center">
              <h2 className="display text-3xl leading-tight text-charcoal-700">{t('empty.title')}</h2>
              <p className="mx-auto mt-4 max-w-md text-charcoal-500 leading-relaxed">
                {t('empty.body')}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
