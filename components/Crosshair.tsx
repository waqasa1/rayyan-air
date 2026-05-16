export default function Crosshair({
  size = 110,
  top,
  right,
  opacity = 0.12,
  className = "",
}: {
  size?: number;
  top?: number | string;
  right?: number | string;
  opacity?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ position: "absolute", top, right, opacity, pointerEvents: "none" }}>
      <svg width={size} height={size} viewBox="0 0 110 110">
        <circle cx="55" cy="55" r="48" stroke="var(--amber)" strokeWidth="0.8" fill="none" />
        <circle cx="55" cy="55" r="28" stroke="var(--amber)" strokeWidth="0.8" fill="none" />
        <circle cx="55" cy="55" r="3.5" fill="var(--amber)" />
        <line x1="0" y1="55" x2="36" y2="55" stroke="var(--amber)" strokeWidth="0.8" />
        <line x1="74" y1="55" x2="110" y2="55" stroke="var(--amber)" strokeWidth="0.8" />
        <line x1="55" y1="0" x2="55" y2="36" stroke="var(--amber)" strokeWidth="0.8" />
        <line x1="55" y1="74" x2="55" y2="110" stroke="var(--amber)" strokeWidth="0.8" />
        <line x1="22" y1="22" x2="30" y2="30" stroke="var(--amber)" strokeWidth="0.6" />
        <line x1="80" y1="22" x2="88" y2="30" stroke="var(--amber)" strokeWidth="0.6" />
        <line x1="22" y1="88" x2="30" y2="80" stroke="var(--amber)" strokeWidth="0.6" />
        <line x1="80" y1="88" x2="88" y2="80" stroke="var(--amber)" strokeWidth="0.6" />
      </svg>
    </div>
  );
}
