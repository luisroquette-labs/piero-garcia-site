export default function Logo() {
  return (
    <span className="logo">
      <svg className="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="pgbars" x1="16" y1="48" x2="48" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#0e1613" stroke="rgba(255,255,255,0.14)" />
        {/* barras ascendentes — "operação que sobe com método" */}
        <rect x="16" y="34" width="9" height="14" rx="3" fill="url(#pgbars)" />
        <rect x="27.5" y="26" width="9" height="22" rx="3" fill="url(#pgbars)" />
        <rect x="39" y="16" width="9" height="32" rx="3" fill="url(#pgbars)" />
      </svg>
      <span className="word">
        <b>Piero</b> <span>Garcia</span>
      </span>
    </span>
  );
}
