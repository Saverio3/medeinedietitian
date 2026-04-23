export default function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle — subtle */}
      <circle
        cx="24"
        cy="24"
        r="23"
        stroke="rgb(74, 105, 69)"
        strokeWidth="1"
        fill="rgb(251, 248, 243)"
      />

      {/* Abstract leaf/seed form — fertility, growth */}
      <path
        d="M24 10 C30 10, 34 16, 34 24 C34 32, 30 38, 24 38 C18 38, 14 32, 14 24 C14 16, 18 10, 24 10 Z"
        fill="rgb(122, 155, 118)"
        opacity="0.12"
      />

      {/* Central stem */}
      <path
        d="M24 11 L24 37"
        stroke="rgb(74, 105, 69)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* The M monogram - curved, serif-inspired */}
      <path
        d="M16 32 L16 18 C16 17.5, 16.5 17, 17 17 C17.5 17, 17.8 17.3, 18 17.8 L23.5 28 L29 17.8 C29.2 17.3, 29.5 17, 30 17 C30.5 17, 31 17.5, 31 18 L31 32"
        stroke="rgb(44, 42, 40)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Subtle dot — signature accent */}
      <circle cx="35" cy="13" r="1.2" fill="rgb(201, 123, 99)" />
    </svg>
  );
}
