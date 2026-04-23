export default function HeroOrnament() {
  return (
    <>
      {/* Large organic shape - top right */}
      <svg
        className="absolute -right-40 -top-40 h-[600px] w-[600px] opacity-[0.06] md:opacity-[0.08] lg:-right-20 lg:-top-20"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 300 50 C 420 50, 520 150, 550 280 C 580 400, 500 520, 370 545 C 240 570, 110 490, 70 360 C 30 230, 140 90, 260 60 Z"
          fill="rgb(122, 155, 118)"
        />
      </svg>

      {/* Smaller seed shape - bottom left */}
      <svg
        className="absolute -bottom-32 -left-32 h-96 w-96 opacity-[0.07] md:opacity-[0.09] lg:-left-20"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="130"
          transform="rotate(-25 200 200)"
          fill="rgb(201, 123, 99)"
        />
      </svg>

      {/* Tiny accent dot */}
      <div className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-clay-400 opacity-60" aria-hidden />
    </>
  );
}
