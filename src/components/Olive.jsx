/**
 * Rama de olivo decorativa (line-art suave con hojas y aceitunas).
 * Pensada como detalle elegante para enmarcar el sobre.
 */

const NODES = [
  [48, 58],
  [80, 53],
  [112, 49],
  [144, 45],
  [176, 41],
  [206, 36],
  [232, 30],
]

const OLIVES = [
  [104, 50],
  [152, 44],
  [198, 37],
]

function Leaf({ x, y, rot, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <path d="M0 0 C 9 -4 18 -4 26 0 C 18 4 9 4 0 0 Z" fill="#93a06a" />
      <path d="M3 0 H23" stroke="#728050" strokeWidth="0.8" strokeLinecap="round" />
    </g>
  )
}

export default function Olive({ className, style }) {
  return (
    <svg viewBox="0 0 260 96" className={className} style={style} aria-hidden fill="none">
      {/* Tallo */}
      <path
        d="M12 68 C 80 54, 160 46, 250 24"
        stroke="#7c8a56"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Hojas opuestas en cada nodo */}
      {NODES.map(([x, y], i) => {
        const s = i === NODES.length - 1 ? 0.7 : 1
        return (
          <g key={i}>
            <Leaf x={x} y={y} rot={-58} scale={s} />
            <Leaf x={x} y={y} rot={40} scale={s} />
          </g>
        )
      })}
      {/* Hoja terminal */}
      <Leaf x={248} y={24} rot={-14} scale={0.9} />

      {/* Aceitunas */}
      {OLIVES.map(([x, y], i) => (
        <g key={`o${i}`} transform={`translate(${x} ${y}) rotate(12)`}>
          <ellipse cx="0" cy="6" rx="3.6" ry="5" fill="#5f7139" />
          <ellipse cx="-1" cy="4" rx="1.1" ry="1.6" fill="#8ea061" opacity="0.7" />
        </g>
      ))}
    </svg>
  )
}
