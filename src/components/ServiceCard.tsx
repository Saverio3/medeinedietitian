import { Link } from '@/i18n/navigation';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  cta: string;
  index: number;
};

export default function ServiceCard({ slug, tag, title, description, cta, index }: Props) {
  const href = `/services/${slug}`;
  const bgVariant = index === 0 ? 'sage' : index === 1 ? 'clay' : 'neutral';

  return (
    <Link
      // @ts-expect-error typed routes
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-charcoal-700/8 bg-cream-100 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-charcoal-700/15 hover:shadow-2xl hover:shadow-charcoal-700/10 md:p-8"
    >
      {/* Background accent */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30 ${
          bgVariant === 'sage'
            ? 'bg-sage-300'
            : bgVariant === 'clay'
              ? 'bg-clay-300'
              : 'bg-gold-400'
        }`}
      />

      {/* Tag */}
      {tag && (
        <div className="relative mb-6">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${
              bgVariant === 'sage'
                ? 'bg-sage-100 text-sage-700'
                : bgVariant === 'clay'
                  ? 'bg-clay-100 text-clay-700'
                  : 'bg-charcoal-100 text-charcoal-500'
            }`}
          >
            {tag}
          </span>
        </div>
      )}
      {!tag && <div className="mb-6 h-7" aria-hidden />}

      <h3 className="relative display text-2xl leading-tight text-charcoal-700 md:text-3xl">
        {title}
      </h3>

      <p className="relative mt-4 flex-1 text-[0.95rem] leading-relaxed text-charcoal-500">
        {description}
      </p>

      <div className="relative mt-8 flex items-center gap-2 text-sm font-medium text-charcoal-700 transition-colors group-hover:text-sage-600">
        <span>{cta}</span>
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      </div>
    </Link>
  );
}
