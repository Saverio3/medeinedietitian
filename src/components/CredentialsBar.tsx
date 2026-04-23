import { ShieldCheck, Award, Sparkles, BookOpen } from 'lucide-react';

/**
 * Credential display — uses tasteful iconography + text rather than stretched logos.
 * When Medeinė confirms BDA full membership + specialist group, we can swap in
 * official logo SVGs. For now the textual treatment looks more polished anyway
 * and avoids the dated "stock logo" look of most dietitian sites.
 */
export default function CredentialsBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'HCPC Registered',
      subtitle: 'hcpc-uk.org',
    },
    {
      icon: Award,
      title: 'BDA Full Member',
      subtitle: 'bda.uk.com',
    },
    {
      icon: BookOpen,
      title: 'BSc Nutrition & Dietetics',
      subtitle: 'Accredited degree',
    },
    {
      icon: Sparkles,
      title: 'NHS Experience',
      subtitle: 'Community & hospital',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-sage-200 bg-sage-50">
              <Icon className="h-4 w-4 text-sage-600" strokeWidth={1.5} />
            </div>
            <div className="min-w-0">
              <div className="font-serif text-sm leading-tight text-charcoal-700">
                {item.title}
              </div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-charcoal-400">
                {item.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
