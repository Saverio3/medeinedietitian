import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Medeinė Deginaitė — Registered Dietitian logo"
        fill
        sizes="(max-width: 768px) 40px, 48px"
        className="object-contain"
        priority
      />
    </div>
  );
}