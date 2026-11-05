// Original SVG marks for each app. No external assets.
export default function AppIcon({ glyph, accent, size = 56 }: { glyph: string; accent: string; size?: number }) {
  const common = { fill: 'none', stroke: accent, strokeWidth: 2.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  let inner
  switch (glyph) {
    case 'knight':
      inner = <path {...common} d="M18 44h20M20 44c0-8 2-12 6-16-4-1-8-4-8-9l8-7 4 3 6-2c4 4 6 10 6 18v13M26 22l2 2" />
      break
    case 'alarm':
      inner = (
        <g {...common}>
          <circle cx="28" cy="31" r="12" />
          <path d="M28 25v6l4 3M14 16l-4 4M42 16l4 4" />
        </g>
      )
      break
    case 'cert':
      inner = (
        <g {...common}>
          <rect x="13" y="16" width="30" height="21" rx="3" />
          <path d="M19 23h18M19 29h10M24 37l-2 9 6-3 6 3-2-9" />
        </g>
      )
      break
    default:
      inner = (
        <g {...common}>
          <rect x="12" y="14" width="13" height="7" rx="1.5" />
          <rect x="31" y="14" width="13" height="7" rx="1.5" />
          <rect x="21" y="25" width="14" height="7" rx="1.5" />
          <circle cx="28" cy="41" r="2.5" />
        </g>
      )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" role="img" aria-label={`${glyph} icon`} className="shrink-0">
      <rect width="56" height="56" rx="14" fill="#0F1F35" stroke={accent} strokeOpacity="0.35" />
      {inner}
    </svg>
  )
}
