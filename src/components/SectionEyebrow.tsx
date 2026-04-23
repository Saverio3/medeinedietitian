export default function SectionEyebrow({
  children,
  align = 'left',
  theme = 'sage',
}: {
  children: React.ReactNode;
  align?: 'left' | 'center';
  theme?: 'sage' | 'gold' | 'clay';
}) {
  const colorClass =
    theme === 'gold' ? 'text-gold-500' : theme === 'clay' ? 'text-clay-500' : 'text-sage-600';
  const alignClass = align === 'center' ? 'justify-center' : '';

  return (
    <div className={`flex items-center gap-3 ${alignClass}`}>
      <span className={`h-px w-8 bg-current ${colorClass} opacity-60`} />
      <span className={`text-[11px] font-medium uppercase tracking-[0.22em] ${colorClass}`}>
        {children}
      </span>
    </div>
  );
}
