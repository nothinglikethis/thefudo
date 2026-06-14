export const FudoLogo = ({ className = '', light = true }: { className?: string; light?: boolean }) => (
  <svg viewBox="0 0 180 48" className={className} aria-label="Fudo Beverages">
    <text
      x="0"
      y="36"
      fontFamily="'Playfair Display', Georgia, serif"
      fontSize="40"
      fontWeight="700"
      letterSpacing="6"
      fill={light ? '#FFFFFF' : '#0A0A0A'}
    >
      FUDO
    </text>
    <rect x="0" y="44" width="180" height="2" fill="#F4820A" rx="1" />
  </svg>
);
