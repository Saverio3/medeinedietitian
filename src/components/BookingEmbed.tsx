'use client';

import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function BookingEmbed({ cta }: { cta: string }) {
  const bookingUrl = `https://cal.com/${siteConfig.booking.calUsername}/${siteConfig.booking.discoveryCallSlug}`;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-sage-300 bg-gradient-to-br from-sage-50 to-cream-200 p-8 md:p-10">
      {/* Decorative pattern */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sage-200 opacity-50 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-clay-100 opacity-40 blur-2xl"
        aria-hidden
      />

      <div className="relative">
        <div className="eyebrow mb-3 text-sage-700">15 min · free · online</div>
        <h3 className="display text-2xl leading-tight text-charcoal-700 md:text-3xl">
          Discovery Call
        </h3>
        <p className="mt-4 leading-relaxed text-charcoal-500">
          A relaxed conversation to understand your goals and see if we're a good fit. No advice
          given, no pressure. Straight to the calendar.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-8 w-full md:w-auto"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-4 text-xs text-charcoal-400">
          Opens in a new tab · Cal.com
        </p>
      </div>
    </div>
  );
}
