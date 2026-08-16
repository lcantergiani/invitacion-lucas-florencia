import { motion } from 'motion/react'
import { wedding } from '../data/wedding'
import { fadeUp, viewportReveal } from '../lib/motion'
import { paperStyle } from '../lib/paper'
import SectionTitle from './SectionTitle'

// Íconos inline (SVG) para no depender de librerías externas.
function RingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <circle cx="9" cy="14" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="15" cy="14" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9 8l1.5-3h3L15 8" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function GlassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path d="M6 3h12l-1 6a5 5 0 01-10 0L6 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 14v6M8 20h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function DressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path d="M9 3l3 3 3-3M9 3l-1 5 4 3 4-3-1-5M8 8L5 20h14L16 8" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

export default function Details() {
  const { venues, dressCode } = wedding

  const cards = [
    {
      icon: <RingsIcon />,
      title: 'Ceremonia',
      lines: [venues.ceremony.name, venues.ceremony.time],
    },
    {
      icon: <GlassIcon />,
      title: 'Celebración',
      lines: [venues.party.name, venues.party.time],
    },
    {
      icon: <DressIcon />,
      title: 'Dress code',
      lines: [dressCode, 'Elegante · sobrio'],
    },
  ]

  return (
    <section id="detalles" className="section-pad bg-sand/40">
      <motion.div {...viewportReveal} className="mx-auto max-w-5xl">
        <SectionTitle title="Detalles del evento" />

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={paperStyle}
              className="flex flex-col items-center rounded-2xl bg-ivory/80 px-8 py-12 text-center shadow-[0_1px_30px_-15px_rgba(43,41,37,0.25)]"
            >
              <span className="text-accent">{c.icon}</span>
              <h3 className="mt-6 font-serif text-2xl font-light text-ink">
                {c.title}
              </h3>
              <div className="mt-4 space-y-1">
                {c.lines.map((line) => (
                  <p
                    key={line}
                    className="font-sans text-sm font-light text-stone"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
