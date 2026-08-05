import { motion } from 'motion/react'
import { wedding } from '../data/wedding'
import Casona from './Casona'
import Bougainvillea from './Bougainvillea'

const ease = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Fondo sutil con degradé suave */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ivory via-ivory to-sand" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
      />

      {/* Detalle floral: esquina superior izquierda */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-8 -top-10 -z-10 w-28 sm:w-40"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1.6, ease, delay: 0.5 }}
      >
        <Bougainvillea className="w-full" />
      </motion.div>

      {/* Detalle floral: esquina inferior derecha */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -right-8 -z-10 w-32 -scale-x-100 rotate-180 sm:w-44"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1.6, ease, delay: 0.7 }}
      >
        <Bougainvillea className="w-full" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.div variants={item} className="mb-6 text-accent/70">
          <Casona className="mx-auto w-40 sm:w-48" />
        </motion.div>

        <motion.p variants={item} className="eyebrow mb-8">
          Nos casamos
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif text-5xl font-light leading-[1.05] text-ink sm:text-7xl md:text-8xl"
        >
          {wedding.couple.groom.split(' ')[0]}
          <span className="mx-3 inline-block text-accent">&amp;</span>
          {wedding.couple.bride.split(' ')[0]}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-10 flex items-center gap-5 text-stone"
        >
          <span className="h-px w-12 bg-accent/40" />
          <span className="font-sans text-sm uppercase tracking-widest2">
            {wedding.dateLabel}
          </span>
          <span className="h-px w-12 bg-accent/40" />
        </motion.div>

        <motion.a
          variants={item}
          href="#rsvp"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease }}
          className="mt-14 rounded-full border border-ink/20 px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Confirmar asistencia
        </motion.a>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-10 w-px bg-gradient-to-b from-accent/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
