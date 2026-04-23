import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default async function FoodCheckerCTA() {
  const t = await getTranslations('foodChecker.cta');

  return (
    <section className="relative overflow-hidden border-y border-charcoal-700/8 bg-sage-900 py-20 text-cream-100 md:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at top right, rgba(201, 165, 112, 0.15), transparent 60%), radial-gradient(ellipse at bottom left, rgba(122, 155, 118, 0.2), transparent 60%)',
        }}
      />
      <div className="container-narrow relative text-center">
        <div className="inline-flex items-center justify-center">
          <SectionEyebrow theme="gold" align="center">
            {t('eyebrow')}
          </SectionEyebrow>
        </div>
        <h2 className="display mt-5 text-balance text-3xl leading-[1.1] text-cream-100 md:text-4xl lg:text-5xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-cream-200/90 md:text-lg">
          {t('subtitle')}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-7 py-3.5 text-sm font-medium text-charcoal-700 transition-all hover:bg-gold-400"
          >
            {t('button')}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services/fertility"
            className="inline-flex items-center gap-2 rounded-full border border-cream-100/25 px-7 py-3.5 text-sm text-cream-100 transition-all hover:bg-cream-100 hover:text-charcoal-700"
          >
            {t('learnMore')}
          </Link>
        </div>
      </div>
    </section>
  );
}