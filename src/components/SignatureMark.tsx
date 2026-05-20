export function SignatureMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 180"
      role="img"
      aria-label="Melody Amoabeng monogram"
    >
      <defs>
        <linearGradient id="markGradient" x1="20" x2="160" y1="20" y2="165">
          <stop offset="0" stopColor="#f7d8a8" />
          <stop offset="0.5" stopColor="#eab308" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
        <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#10b981" floodOpacity="0.18" />
        </filter>
      </defs>
      <rect width="180" height="180" rx="32" fill="#0d0d0f" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
      <path
        d="M36 136V45h20l35 56 35-56h18v91h-21V86l-27 42H85L57 86v50H36Z"
        fill="url(#markGradient)"
        filter="url(#glow)"
      />
      <path
        d="M34 142c32-8 69-8 111 0"
        fill="none"
        stroke="#f7efe1"
        strokeLinecap="round"
        strokeWidth="5.5"
      />
    </svg>
  );
}
