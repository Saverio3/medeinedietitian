import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { locales } from '@/i18n/config';
import { getAllSlugs } from '@/lib/blog';
import { getAllFoodSlugs } from '@/content/pregnancy-foods';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/services/fertility',
    '/services/weight-loss',
    '/services/womens-health',
    '/pricing',
    '/blog',
    '/contact',
    '/tools/pregnancy-food-checker',
  ];

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Main routes × locales
  for (const route of routes) {
    for (const locale of locales) {
      const path = locale === 'en' ? route : `/${locale}${route}`;
      entries.push({
        url: `${siteConfig.url}${path || '/'}`,
        lastModified: now,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
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

  // Blog posts × locales
  for (const locale of locales) {
    for (const slug of getAllSlugs(locale)) {
      const path = locale === 'en' ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
      entries.push({
        url: `${siteConfig.url}${path}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
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