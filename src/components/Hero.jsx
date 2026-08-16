import { motion } from 'motion/react'
import { wedding } from '../data/wedding'

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
  // Partes de la fecha para el bloque tipo calendario.
  const d = wedding.date
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)
  const weekday = cap(d.toLocaleDateString('es-ES', { weekday: 'long' }))
  const month = cap(d.toLocaleDateString('es-ES', { month: 'long' }))
  const day = d.getDate()
  const year = d.getFullYear()
  const time =
    d.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }) + ' horas'

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center sm:py-16"
    >
      {/* Fondo beige claro (igual que la segunda página) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-sand/40" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
      />

      <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-[1.25rem] bg-ivory px-6 py-14 shadow-[0_25px_70px_-30px_rgba(43,41,37,0.45)] ring-1 ring-ink/5 sm:px-12">
        {/* Textura de papel (imagen) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${import.meta.env.BASE_URL}textura2.png")` }}
        />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div variants={item} className="mb-5">
          <img
            src={`${import.meta.env.BASE_URL}capilla2.png`}
            alt="Capilla"
            className="mx-auto w-48 sm:w-64"
          />
        </motion.div>

        <motion.p variants={item} className="eyebrow mb-6">
          Junto a nuestros padres
        </motion.p>

        <motion.div
          variants={item}
          className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center sm:gap-x-14"
        >
          <div className="space-y-1">
            {wedding.parents.groom.map((name) => (
              <p key={name} className="whitespace-nowrap font-serif text-sm font-light text-ink sm:text-base">
                {name}
              </p>
            ))}
          </div>
          <div className="space-y-1">
            {wedding.parents.bride.map((name) => (
              <p key={name} className="whitespace-nowrap font-serif text-sm font-light text-ink sm:text-base">
                {name}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="flex flex-col items-center gap-1 font-serif text-xl font-light text-ink sm:text-2xl"
        >
          <span>{wedding.couple.groom}</span>
          <span className="text-accent">&amp;</span>
          <span>{wedding.couple.bride}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-lg font-sans text-sm font-light leading-relaxed text-stone"
        >
          Te invitamos a celebrar nuestro matrimonio con una ceremonia religiosa
          en Casa Olivos de Chacabuco, Colina y a una recepción en el mismo
          lugar.
        </motion.p>

        <motion.div variants={item} className="mt-8">
          <div className="inline-block text-ink">
            <p className="font-serif text-xl font-light">{month}</p>

            <div className="mt-2 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <span className="h-px w-12 bg-[#d8a7b0]" />
                <span className="font-sans text-sm">{weekday}</span>
                <span className="h-px w-12 bg-[#d8a7b0]" />
              </div>

              <span className="text-center font-sans text-4xl font-light tabular-nums leading-none sm:text-5xl">
                {day}
              </span>

              <div className="flex flex-col items-center gap-1.5">
                <span className="h-px w-12 bg-[#d8a7b0]" />
                <span className="font-sans text-sm tabular-nums">{year}</span>
                <span className="h-px w-12 bg-[#d8a7b0]" />
              </div>
            </div>

            <p className="mt-2 font-sans text-sm">{time}</p>
          </div>
        </motion.div>

        <motion.a
          variants={item}
          href="#rsvp"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease }}
          className="mt-10 rounded-full border border-ink/20 px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Confirmar asistencia
        </motion.a>
      </motion.div>
      </div>

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
