import { motion } from 'motion/react'
import { wedding } from '../data/wedding'
import { fadeUp, viewportReveal } from '../lib/motion'
import SectionTitle from './SectionTitle'

export default function Location() {
  const { map } = wedding

  return (
    <section id="mapa" className="section-pad">
      <motion.div {...viewportReveal} className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Cómo llegar" title="El lugar" />

        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
          {/* Foto real de la capilla */}
          <div className="group overflow-hidden rounded-2xl border border-sand shadow-[0_1px_40px_-20px_rgba(43,41,37,0.4)]">
            <img
              src={`${import.meta.env.BASE_URL}capilla-lugar.jpg`}
              alt="Capilla — ceremonia"
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-80"
            />
          </div>

          {/* Foto de Casa Olivos (enlaza a las indicaciones) */}
          <a
            href={map.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-2xl border border-sand shadow-[0_1px_40px_-20px_rgba(43,41,37,0.4)]"
          >
            <img
              src={map.photoSrc}
              alt={map.photoAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-80"
            />
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center gap-5 text-center"
        >
          <p className="font-serif text-xl font-light text-ink">
            {map.address}
          </p>
          <motion.a
            href={map.directionsUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full border border-ink/20 px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Ver indicaciones
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
