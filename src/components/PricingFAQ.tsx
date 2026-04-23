'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Plus, Minus } from 'lucide-react';

type FAQ = { question: string; answer: string };

export default function PricingFAQ() {
  const t = useTranslations('pricing.faq');
  const items = t.raw('items') as FAQ[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? 'border-sage-300 bg-cream-200/50'
                : 'border-charcoal-700/8 bg-cream-100'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream-200/60"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base text-charcoal-700 md:text-lg">
                {item.question}
              </span>
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                {isOpen ? (
                  <Minus className="h-3.5 w-3.5" strokeWidth={2} />
                ) : (
                  <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                )}
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-charcoal-500">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
