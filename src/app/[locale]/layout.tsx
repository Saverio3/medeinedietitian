import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getTranslations, getMessages } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/config';
import { siteConfig } from '@/config/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('defaultTitle'),
    description: t('defaultDescription'),
    keywords: t('keywords'),
    openGraph: {
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: locale === 'lt' ? 'lt_LT' : 'en_GB',
      type: 'website',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: ['/og-image.svg'],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Load messages and pass them explicitly to the client provider.
  // This is the part that was missing — without it, client components
  // (like the Header) don't receive translations and show raw keys.
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* <StructuredData locale={locale as Locale} /> */}
      <div className="relative flex min-h-screen flex-col">
        <Header locale={locale as Locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} />
      </div>
    </NextIntlClientProvider>
  );
}
