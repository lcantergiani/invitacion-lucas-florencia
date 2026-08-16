import { motion } from 'motion/react'
import { wedding } from '../data/wedding'
import { fadeUp, viewportReveal } from '../lib/motion'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sand/40 px-6 py-16 text-center">
      {/* Detalles florales laterales */}
      <img
        src={`${import.meta.env.BASE_URL}flores-der.png`}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 w-40 sm:w-56"
      />

      <motion.div {...viewportReveal} className="relative mx-auto max-w-md">
        <motion.p
          variants={fadeUp}
          className="font-serif text-3xl font-light text-ink"
        >
          {wedding.couple.groom.split(' ')[0]}
          <span className="mx-2 text-accent">&amp;</span>
          {wedding.couple.bride.split(' ')[0]}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-4 font-sans text-xs uppercase tracking-widest2 text-stone"
        >
          {wedding.dateLabel}
        </motion.p>
        <motion.span
          variants={fadeUp}
          className="mx-auto mt-8 block h-px w-12 bg-accent/40"
        />
      </motion.div>
    </footer>
  )
}
