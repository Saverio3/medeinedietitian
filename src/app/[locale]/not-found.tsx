import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft } from 'lucide-react';
import type { Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function NotFound({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('notFound');

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="container-narrow text-center">
        <div className="font-serif text-[7rem] italic leading-none text-sage-600 md:text-[10rem]">
          404
        </div>
        <h1 className="display mt-4 text-balance text-3xl leading-tight text-charcoal-700 md:text-5xl">
          {t('title')}
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-charcoal-500">{t('subtitle')}</p>
        <Link href="/" className="btn btn-primary mt-10">
          <ArrowLeft className="h-4 w-4" />
          {t('cta')}
        </Link>
      </div>
    </section>
  );
}
