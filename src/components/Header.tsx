'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import type { Locale } from '@/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

export default function Header({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
  ];

  const serviceItems = [
    { href: '/services/fertility', label: t('fertility') },
    { href: '/services/weight-loss', label: t('weightLoss') },
    { href: '/services/womens-health', label: t('womensHealth') },
    { href: '/tools/pregnancy-food-checker', label: t('foodChecker'), isTools: true },
  ];

  const tailItems = [
    { href: '/pricing', label: t('pricing') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-100/85 backdrop-blur-md border-b border-charcoal-700/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex h-20 items-center justify-between lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-80"
              aria-label={siteConfig.name}
            >
              <Logo className="h-10 w-10 lg:h-12 lg:w-12" />
              <div className="hidden sm:block">
                <div className="font-serif text-lg leading-none tracking-tight lg:text-xl">
                  {siteConfig.name}
                </div>
                <div className="eyebrow mt-1 text-[10px] lg:text-[11px]">
                  {siteConfig.title}
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:text-sage-600"
                >
                  {item.label}
                </Link>
              ))}

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:text-sage-600"
                >
                  {t('services')}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-[340px] overflow-hidden rounded-2xl border border-charcoal-700/10 bg-cream-100 p-2 shadow-xl shadow-charcoal-700/10">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-xl px-4 py-3 text-sm text-charcoal-700 transition-colors hover:bg-sage-50 hover:text-sage-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {tailItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:text-sage-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: language + CTA */}
            <div className="flex items-center gap-2 lg:gap-3">
              <LanguageSwitcher currentLocale={locale} />

              <Link
                href="/contact"
                className="btn btn-primary hidden px-5 py-2.5 text-xs lg:inline-flex lg:text-sm"
              >
                {t('bookCall')}
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal-700 transition-colors hover:bg-charcoal-700/5 lg:hidden"
                aria-label={mobileOpen ? t('close') : t('openMenu')}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-30 flex flex-col overflow-y-auto bg-cream-100 lg:hidden">
          <div className="container-x flex flex-col gap-2 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-charcoal-700/8 py-4 font-serif text-2xl text-charcoal-700 transition-colors hover:text-sage-600"
              >
                {item.label}
              </Link>
            ))}

            <div className="border-b border-charcoal-700/8 py-4">
              <Link
                href="/services"
                className="mb-3 block font-serif text-2xl text-charcoal-700"
              >
                {t('services')}
              </Link>
              <div className="flex flex-col gap-2 pl-4">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-base text-charcoal-500 hover:text-sage-600"
                  >
                    · {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {tailItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-charcoal-700/8 py-4 font-serif text-2xl text-charcoal-700 transition-colors hover:text-sage-600"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="btn btn-primary mt-8 w-full"
            >
              {t('bookCall')}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
