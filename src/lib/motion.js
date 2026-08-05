// Variantes de animación reutilizables para mantener una sensación coherente.
// La transición usa easing suave y duraciones de 0.6–0.8s.

const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease } },
}

// Contenedor que escalona la aparición de sus hijos.
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

// Props que se repiten en casi todas las secciones al hacer scroll reveal.
export const viewportReveal = {
  variants: stagger,
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.25 },
}
