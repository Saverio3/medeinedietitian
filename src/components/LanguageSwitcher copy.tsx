'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Globe, Check } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const switchTo = (locale: Locale) => {
    setOpen(false);
    router.replace({ pathname, params }, { locale });
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-charcoal-700/15 bg-cream-100 px-3 text-xs font-medium text-charcoal-700 transition-all hover:border-charcoal-700/30 hover:bg-cream-200"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="uppercase tracking-wider">{currentLocale}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-charcoal-700/10 bg-cream-100 shadow-xl shadow-charcoal-700/10">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchTo(locale)}
              className={`flex w-full items-center justify-between gap-2 px-4 py-3 text-sm transition-colors ${
                locale === currentLocale
                  ? 'bg-sage-50 text-sage-700'
                  : 'text-charcoal-700 hover:bg-cream-200'
              }`}
            >
              <span>{localeNames[locale]}</span>
              {locale === currentLocale && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
