/* Ilustración line-art de una casona antigua (estilo colonial) */
export default function Casona({ className }) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {/* Cipreses laterales */}
      <path d="M40 176c0-34 5-70 9-70s9 36 9 70" />
      <path d="M282 176c0-34 5-70 9-70s9 36 9 70" />

      {/* Base / suelo */}
      <path d="M28 176h264" />

      {/* Cuerpo principal */}
      <path d="M78 176V96h164v80" />

      {/* Techo a dos aguas con alero */}
      <path d="M66 96 160 44l94 52" />
      <path d="M70 96h180" strokeWidth="1" />

      {/* Frontón / pico del techo */}
      <path d="M146 61h28l-14-8z" />

      {/* Galería de arcos (planta baja) */}
      <path d="M96 176v-40M124 176v-40M152 176v-40M168 176v-40M196 176v-40M224 176v-40" />
      <path d="M96 136a14 14 0 0 1 28 0M152 136a14 14 0 0 1 16 0M196 136a14 14 0 0 1 28 0" strokeWidth="1" />
      <path d="M90 136h140" />

      {/* Puerta central */}
      <path d="M150 176v-30a10 10 0 0 1 20 0v30" />

      {/* Ventanas planta alta */}
      <rect x="98" y="108" width="20" height="20" rx="1" />
      <path d="M108 108v20M98 118h20" strokeWidth="0.9" />
      <rect x="202" y="108" width="20" height="20" rx="1" />
      <path d="M212 108v20M202 118h20" strokeWidth="0.9" />

      {/* Cupulín central con cruz */}
      <path d="M154 44v-10h12v10M160 34v-10M156 28h8" strokeWidth="1" />
    </svg>
  )
}
