import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { locales } from '@/i18n/config';
import { getAllSlugs } from '@/lib/blog';
import { getAllFoodSlugs } from '@/content/pregnancy-foods';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/fertility', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/weight-loss', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/womens-health', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/tools/pregnancy-food-checker', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/legal/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/legal/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Main routes × locales
  for (const { path: route, priority, changeFrequency } of routes) {
    for (const locale of locales) {
      const path = locale === 'en' ? route : `/${locale}${route}`;
      entries.push({
        url: `${siteConfig.url}${path || '/'}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l === 'en' ? 'en-GB' : 'lt-LT',
              `${siteConfig.url}${l === 'en' ? '' : `/${l}`}${route}`,
            ])
          ),
        },
      });
    }
  }

  // Blog posts × locales (WITH alternates for hreflang)
  for (const locale of locales) {
    for (const slug of getAllSlugs(locale)) {
      const path = locale === 'en' ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
      entries.push({
        url: `${siteConfig.url}${path}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l === 'en' ? 'en-GB' : 'lt-LT',
              `${siteConfig.url}${l === 'en' ? '' : `/${l}`}/blog/${slug}`,
            ])
          ),
        },
      });
    }
  }

  // Food checker individual pages × locales
  for (const locale of locales) {
    for (const slug of getAllFoodSlugs()) {
      const path =
        locale === 'en'
          ? `/tools/pregnancy-food-checker/${slug}`
          : `/${locale}/tools/pregnancy-food-checker/${slug}`;
      entries.push({
        url: `${siteConfig.url}${path}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l === 'en' ? 'en-GB' : 'lt-LT',
              `${siteConfig.url}${l === 'en' ? '' : `/${l}`}/tools/pregnancy-food-checker/${slug}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
