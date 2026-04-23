type Props = {
  number: string;
  title: string;
  description: string;
  index: number;
};

export default function ProcessStep({ number, title, description, index }: Props) {
  const isLast = index === 2;

  return (
    <div className="relative flex flex-col rounded-3xl border border-charcoal-700/8 bg-cream-100 p-8 transition-all duration-500 hover:border-sage-300 hover:shadow-lg hover:shadow-charcoal-700/5 lg:p-10">
      <div className="flex items-start justify-between">
        <span className="font-serif text-5xl italic leading-none text-sage-600 lg:text-6xl">
          {number}
        </span>
        {!isLast && (
          <svg
            className="hidden h-6 w-6 text-charcoal-300 lg:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <h3 className="display mt-6 text-2xl leading-tight text-charcoal-700">{title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal-500">{description}</p>
    </div>
  );
}
