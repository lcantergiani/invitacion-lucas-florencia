/**
 * Ilustración decorativa de una rama de bougainvillea (buganvilla).
 * Estilo botánico suave: brácteas rosadas en grupos de tres, hojas verdes
 * y tallos curvos. Pensada como pequeño detalle ornamental en las esquinas.
 */

// Grupo de 3 brácteas rosadas con florecitas al centro.
function Cluster({ transform, scale = 1 }) {
  return (
    <g transform={transform}>
      <g transform={`scale(${scale})`}>
        {[0, 120, 240].map((a) => (
          <g key={a} transform={`rotate(${a})`}>
            <path
              d="M0 0 C -4 -14 -20 -16 -18 -30 C -17 -40 -8 -42 0 -46 C 8 -42 17 -40 18 -30 C 20 -16 4 -14 0 0 Z"
              fill="#d488ac"
              fillOpacity="0.92"
            />
            <path
              d="M0 -4 C -3 -14 -13 -16 -12 -28 C -11 -36 -5 -38 0 -40 C 5 -38 11 -36 12 -28 C 13 -16 3 -14 0 -4 Z"
              fill="#ecbcd4"
              fillOpacity="0.75"
            />
            <path d="M0 -3 L0 -42" stroke="#b1567f" strokeWidth="1.1" strokeLinecap="round" />
          </g>
        ))}
        {/* Florecitas centrales */}
        <circle r="3.4" fill="#fdf7ec" />
        <circle r="1.4" fill="#d7a746" />
      </g>
    </g>
  )
}

// Hoja verde con nervadura central.
function Leaf({ transform, scale = 1 }) {
  return (
    <g transform={transform}>
      <g transform={`scale(${scale})`}>
        <path
          d="M0 0 C 11 -14 13 -35 0 -52 C -13 -35 -11 -14 0 0 Z"
          fill="#84a05a"
          fillOpacity="0.95"
        />
        <path d="M0 -3 L0 -48" stroke="#5f7a3e" strokeWidth="1.1" strokeLinecap="round" />
      </g>
    </g>
  )
}

export default function Bougainvillea({ className, style }) {
  return (
    <svg
      viewBox="0 0 170 300"
      fill="none"
      aria-hidden
      className={className}
      style={style}
    >
      {/* Tallos */}
      <g stroke="#7c9350" strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M18 8 C 58 26 52 78 88 108 C 118 133 108 198 78 268" />
        <path d="M88 108 C 108 104 126 116 138 96" />
        <path d="M70 168 C 92 172 112 158 126 168" />
        <path d="M64 218 C 46 232 40 250 44 268" />
      </g>

      {/* Hojas */}
      <Leaf transform="translate(40 40) rotate(35)" scale={0.85} />
      <Leaf transform="translate(112 128) rotate(120)" scale={0.8} />
      <Leaf transform="translate(96 196) rotate(160)" scale={0.9} />
      <Leaf transform="translate(52 240) rotate(-30)" scale={0.75} />

      {/* Racimos de brácteas */}
      <Cluster transform="translate(136 92) rotate(20)" scale={0.9} />
      <Cluster transform="translate(90 108) rotate(-10)" scale={1} />
      <Cluster transform="translate(126 168) rotate(35)" scale={0.85} />
      <Cluster transform="translate(70 168) rotate(-25)" scale={0.95} />
      <Cluster transform="translate(44 268) rotate(-15)" scale={0.9} />
    </svg>
  )
}
