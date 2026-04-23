// src\app\[locale]\page.tsx

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRight, ArrowDown, Sparkles, Leaf, Heart, Apple } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import HeroOrnament from '@/components/HeroOrnament';
import SectionEyebrow from '@/components/SectionEyebrow';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');

  const services = t.raw('services.items') as Array<{
    slug: string;
    tag: string;
    title: string;
    description: string;
    cta: string;
  }>;

  const trustItems = t.raw('trust.items') as Array<{
    title: string;
    description: string;
  }>;

  const processSteps = t.raw('process.steps') as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <>
      {/* ────────────── HERO ────────────── */}
      <section className="relative overflow-hidden pb-16 pt-8 md:pb-24 lg:pb-32 lg:pt-12">
        {/* Organic background shapes */}
        <HeroOrnament />

        <div className="container-wide relative">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Copy */}
            <div className="lg:col-span-7">
              <div className="reveal reveal-1">
                <SectionEyebrow>{t('hero.eyebrow')}</SectionEyebrow>
              </div>

              <h1 className="display reveal reveal-2 mt-6 text-[2.75rem] leading-[1.02] text-charcoal-700 sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
                <span className="block">{t('hero.title1')}</span>
                <span className="display-italic mt-1 block text-sage-600">
                  {t('hero.title2')}
                </span>
                <span className="block">{t('hero.title3')}</span>
              </h1>

              <p className="reveal reveal-3 mt-8 max-w-xl text-lg leading-relaxed text-charcoal-500 md:text-xl">
                {t('hero.subtitle')}
              </p>

              <div className="reveal reveal-4 mt-10 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-primary text-sm md:text-[0.95rem]">
                  {t('hero.primaryCta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn btn-secondary text-sm md:text-[0.95rem]">
                  {t('hero.secondaryCta')}
                </Link>
              </div>

              {/* Mini trust row */}
              <div className="reveal reveal-5 mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-charcoal-400">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
                  HCPC Registered
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
                  BDA Full Member
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
                  NHS Experienced
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-clay-400" />
                  EN · LT
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="reveal reveal-3 relative lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-xl shadow-charcoal-700/10 lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=900&q=85"
                  alt={t('hero.photoAlt')}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sage-900/10 via-transparent to-clay-500/15 mix-blend-multiply" />
                {/* BACKUP — my profile photo
                <Image
                  src="/images/medeine-portrait.jpg"
                  alt={t('hero.photoAlt')}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top"
                />
                */}
              </div>

              {/* Floating credentials card */}
              <div className="absolute -bottom-6 -left-4 z-10 hidden w-64 rounded-2xl border border-charcoal-700/8 bg-cream-100 p-5 shadow-xl shadow-charcoal-700/10 sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-50">
                    <Leaf className="h-5 w-5 text-sage-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-serif text-sm leading-tight text-charcoal-700">
                      Over a decade
                    </div>
                    <div className="mt-0.5 text-[11px] text-charcoal-400">
                      of clinical dietetic practice
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 top-6 z-10 hidden w-56 rounded-2xl border border-charcoal-700/8 bg-cream-100 p-5 shadow-xl shadow-charcoal-700/10 sm:block lg:-right-6 lg:top-12">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-clay-50">
                    <Heart className="h-5 w-5 text-clay-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-serif text-sm leading-tight text-charcoal-700">
                      Lived experience
                    </div>
                    <div className="mt-0.5 text-[11px] text-charcoal-400">
                      of the fertility journey
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 hidden items-center gap-3 lg:flex">
            <div className="h-px w-12 bg-charcoal-700/20" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-charcoal-400">
              {t('hero.scrollHint')}
            </span>
            <ArrowDown className="h-3 w-3 text-charcoal-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ────────────── TRUST ────────────── */}
      <section className="relative border-y border-charcoal-700/8 bg-cream-200 grain">
        <div className="container-wide py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionEyebrow>{t('trust.eyebrow')}</SectionEyebrow>
              <h2 className="display mt-5 text-balance text-4xl leading-[1.1] text-charcoal-700 md:text-5xl">
                {t('trust.title')}
              </h2>
              <p className="mt-6 max-w-md text-charcoal-500 leading-relaxed">
                {t('trust.body')}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {trustItems.map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-charcoal-700/8 bg-cream-100 p-6 transition-all duration-500 hover:border-sage-300 hover:shadow-lg hover:shadow-charcoal-700/5"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 transition-colors group-hover:bg-sage-100">
                      <Sparkles className="h-4 w-4 text-sage-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-lg text-charcoal-700">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── SERVICES ────────────── */}
      <section className="section">
        <div className="container-wide">
          <div className="mb-14 max-w-3xl lg:mb-20">
            <SectionEyebrow>{t('services.eyebrow')}</SectionEyebrow>
            <h2 className="display mt-5 text-balance text-4xl leading-[1.08] text-charcoal-700 md:text-5xl lg:text-[3.5rem]">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                tag={service.tag}
                title={service.title}
                description={service.description}
                cta={service.cta}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── STORY ────────────── */}
      <section className="relative overflow-hidden bg-sage-900 text-cream-100">
        {/* Background flourishes */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top right, rgba(201, 165, 112, 0.15), transparent 60%), radial-gradient(ellipse at bottom left, rgba(122, 155, 118, 0.2), transparent 60%)',
          }}
        />

        <div className="container-wide relative py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-charcoal-700/30">
                {/* BACKUP — previous stock kitchen image (kept for reference)
                <Image
                  src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=900&q=85"
                  alt="Warm kitchen scene"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 via-transparent to-transparent" />
                */}
                <Image
                  src="/images/medeine-portrait.jpg"
                  alt="Medeinė Deginaitė, Registered Dietitian"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 via-transparent to-transparent" />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="eyebrow text-gold-400">{t('story.eyebrow')}</div>
              <h2 className="display mt-5 text-balance text-3xl leading-[1.1] text-cream-100 md:text-4xl lg:text-5xl">
                {t('story.title')}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-cream-200/90 md:text-lg">
                <p>{t('story.body1')}</p>
                <p>{t('story.body2')}</p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-100/25 px-6 py-3 text-sm text-cream-100 transition-all hover:bg-cream-100 hover:text-charcoal-700"
                >
                  {t('story.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="font-serif italic text-gold-400">{t('story.signature')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── PROCESS ────────────── */}
      <section className="section">
        <div className="container-wide">
          <div className="mb-14 max-w-3xl lg:mb-20">
            <SectionEyebrow>{t('process.eyebrow')}</SectionEyebrow>
            <h2 className="display mt-5 text-balance text-4xl leading-[1.08] text-charcoal-700 md:text-5xl">
              {t('process.title')}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
            {processSteps.map((step, i) => (
              <ProcessStep
                key={i}
                number={step.number}
                title={step.title}
                description={step.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── LANGUAGES ────────────── */}
      <section className="section border-y border-charcoal-700/8 bg-cream-200">
        <div className="container-narrow text-center">
          <SectionEyebrow>{t('languages.eyebrow')}</SectionEyebrow>
          <h2 className="display mt-5 text-balance text-3xl leading-[1.15] text-charcoal-700 md:text-4xl lg:text-5xl">
            {t('languages.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-charcoal-500 md:text-lg">
            {t('languages.body')}
          </p>

          <div className="mt-10 inline-flex items-center gap-6 rounded-full border border-charcoal-700/10 bg-cream-100 px-8 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sage-500" />
              <span className="font-serif text-sm">English</span>
            </div>
            <span className="h-4 w-px bg-charcoal-700/15" />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sage-500" />
              <span className="font-serif text-sm">Lietuvių</span>
            </div>
          </div>
        </div>
      </section>

            {/* ────────────── FREE TOOL CALLOUT ────────────── */}
      <section className="relative overflow-hidden border-y border-charcoal-700/8 bg-cream-200 grain">
        <div className="container-wide py-20 lg:py-28">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-charcoal-700/8 bg-cream-100 p-10 md:p-14 lg:p-16">
            {/* Soft decorative background */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sage-100 opacity-60 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-clay-100 opacity-40 blur-3xl"
              aria-hidden
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Left: icon + copy */}
              <div className="lg:col-span-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-50">
                  <Apple className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
                </div>

                <div className="mt-6">
                  <SectionEyebrow>{t('freeTool.eyebrow')}</SectionEyebrow>
                </div>

                <h2 className="display mt-5 text-balance text-3xl leading-[1.1] text-charcoal-700 md:text-4xl lg:text-5xl">
                  {t('freeTool.title')}
                </h2>

                <p className="mt-6 max-w-xl leading-relaxed text-charcoal-500 md:text-lg">
                  {t('freeTool.body')}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/tools/pregnancy-food-checker"
                    className="btn btn-primary"
                  >
                    {t('freeTool.cta')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-xs text-charcoal-400">
                    {t('freeTool.meta')}
                  </span>
                </div>
              </div>

              {/* Right: decorative preview card */}
              <div className="hidden lg:col-span-4 lg:block">
                <div className="relative flex flex-col gap-3">
                  {/* Sample food entries — decorative */}
                  <div className="group flex items-center gap-3 rounded-2xl border border-charcoal-700/8 bg-cream-50 p-4 transition-all duration-500 hover:border-sage-300 hover:shadow-lg hover:shadow-charcoal-700/5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sage-100">
                      <span className="h-2 w-2 rounded-full bg-sage-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-sm leading-tight text-charcoal-700">Sushi</div>
                      <div className="mt-0.5 text-[11px] text-sage-700">Safe with limits</div>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-charcoal-700/8 bg-cream-50 p-4 transition-all duration-500 hover:border-sage-300 hover:shadow-lg hover:shadow-charcoal-700/5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sage-100">
                      <span className="h-2 w-2 rounded-full bg-sage-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-sm leading-tight text-charcoal-700">Soft cheese</div>
                      <div className="mt-0.5 text-[11px] text-sage-700">Mostly safe</div>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-charcoal-700/8 bg-cream-50 p-4 transition-all duration-500 hover:border-clay-300 hover:shadow-lg hover:shadow-charcoal-700/5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-clay-100">
                      <span className="h-2 w-2 rounded-full bg-clay-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-sm leading-tight text-charcoal-700">Liquorice tea</div>
                      <div className="mt-0.5 text-[11px] text-clay-600">Best avoided</div>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-charcoal-700/8 bg-cream-50 p-4 transition-all duration-500 hover:border-sage-300 hover:shadow-lg hover:shadow-charcoal-700/5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sage-100">
                      <span className="h-2 w-2 rounded-full bg-sage-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-sm leading-tight text-charcoal-700">Folic acid</div>
                      <div className="mt-0.5 text-[11px] text-sage-700">Essential</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── CTA ────────────── */}
      <section className="relative overflow-hidden section">
        <div className="container-narrow text-center">
          <SectionEyebrow>{t('cta.eyebrow')}</SectionEyebrow>
          <h2 className="display mt-5 text-balance text-4xl leading-[1.05] text-charcoal-700 md:text-5xl lg:text-6xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-charcoal-500 md:text-lg">
            {t('cta.subtitle')}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              {t('cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="link-underline px-4 py-2 text-sm text-charcoal-500">
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
