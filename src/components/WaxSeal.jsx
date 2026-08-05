/**
 * Sello de lacre rojo realista con monograma "L & F".
 * Borde derretido irregular (feDisplacementMap), gotas de cera, textura,
 * brillo especular, reborde prensado y monograma grabado en relieve.
 */
export default function WaxSeal({ className }) {
  const initials = (props) => (
    <text
      x="50"
      y="51"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily='"Cormorant Garamond", serif'
      fontSize="29"
      fontWeight="600"
      letterSpacing="-1.5"
      {...props}
    >
      L&amp;F
    </text>
  )

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <radialGradient id="waxBody" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#a8465a" />
          <stop offset="26%" stopColor="#8a2a3f" />
          <stop offset="58%" stopColor="#701f30" />
          <stop offset="84%" stopColor="#531424" />
          <stop offset="100%" stopColor="#380d18" />
        </radialGradient>
        <radialGradient id="waxField" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#701f30" stopOpacity="0" />
          <stop offset="72%" stopColor="#701f30" stopOpacity="0" />
          <stop offset="100%" stopColor="#2c0a14" stopOpacity="0.55" />
        </radialGradient>
        <filter id="waxMolten" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.08 0.1" numOctaves="2" seed="11" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="waxTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="5" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.28  0 0 0 0 0.05  0 0 0 0 0.10  0 0 0 0.32 0" />
        </filter>
        <filter id="waxDrop" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.4" floodColor="#220611" floodOpacity="0.55" />
        </filter>
        <clipPath id="waxClip">
          <circle cx="50" cy="50" r="36" />
        </clipPath>
      </defs>

      {/* Cuerpo de cera con borde derretido y gotas */}
      <g filter="url(#waxDrop)">
        <g filter="url(#waxMolten)">
          <circle cx="50" cy="50" r="36" fill="url(#waxBody)" />
          <circle cx="34" cy="78" r="5" fill="url(#waxBody)" />
          <circle cx="70" cy="80" r="4" fill="url(#waxBody)" />
          <circle cx="80" cy="40" r="4.5" fill="url(#waxBody)" />
        </g>
      </g>

      {/* Textura, campo hundido y brillos (recortados al sello) */}
      <g clipPath="url(#waxClip)">
        <circle cx="50" cy="50" r="36" filter="url(#waxTexture)" opacity="0.5" />
        <circle cx="50" cy="50" r="36" fill="url(#waxField)" />
        <ellipse cx="39" cy="33" rx="16" ry="10" fill="#f6cdd6" opacity="0.26" />
        <ellipse cx="36" cy="30" rx="6" ry="3.4" fill="#ffffff" opacity="0.28" />
      </g>

      {/* Reborde prensado (anillo elevado) */}
      <circle cx="50" cy="50" r="30.5" fill="none" stroke="#360c18" strokeOpacity="0.5" strokeWidth="1.3" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#e19aa8" strokeOpacity="0.26" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="27.5" fill="none" stroke="#2c0a14" strokeOpacity="0.3" strokeWidth="0.7" />

      {/* Monograma L & F grabado en relieve (oclusión, luz y base) */}
      <g clipPath="url(#waxClip)">
        {initials({ fill: '#2c0a14', opacity: 0.8, transform: 'translate(0.9,1.1)' })}
        {initials({ fill: '#e6a3b0', opacity: 0.55, transform: 'translate(-0.8,-0.9)' })}
        {initials({ fill: '#6e1c2c' })}
      </g>
    </svg>
  )
}
