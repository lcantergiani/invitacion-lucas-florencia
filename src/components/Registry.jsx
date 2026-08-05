import { motion } from 'motion/react'
import { fadeUp, viewportReveal } from '../lib/motion'
import SectionTitle from './SectionTitle'

const ease = [0.22, 1, 0.36, 1]

// Reemplazá "#" por la URL real de la lista de novios cuando la tengas.
const REGISTRY_URL = '#'
const REGISTRY_CODE = '18019251-4'

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path d="M20 12v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M2 8h20v4H2zM12 8v13" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 8S10.5 4 8 4a2 2 0 000 4h4zM12 8s1.5-4 4-4a2 2 0 010 4h-4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

export default function Registry() {
  return (
    <section id="lista-novios" className="section-pad bg-sand/40">
      <motion.div {...viewportReveal} className="mx-auto max-w-xl">
        <SectionTitle eyebrow="Regalos" title="Lista de novios" />

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center rounded-2xl bg-ivory/80 px-8 py-12 text-center shadow-[0_1px_30px_-15px_rgba(43,41,37,0.25)]"
        >
          <span className="text-accent">
            <GiftIcon />
          </span>

          <p className="mt-6 max-w-sm font-sans text-sm font-light leading-relaxed text-stone">
            Tu presencia es nuestro mejor regalo. Si querés acompañarnos con un
            detalle, dejamos disponible nuestra lista de novios.
          </p>

          <motion.a
            href={REGISTRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-sans text-xs uppercase tracking-widest2 text-ivory transition-colors hover:bg-accent"
          >
            Ver lista de novios
          </motion.a>

          <p className="mt-6 font-sans text-xs uppercase tracking-widest2 text-accent">
            Código novios
          </p>
          <p className="mt-1 font-serif text-2xl font-light text-ink">
            {REGISTRY_CODE}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
