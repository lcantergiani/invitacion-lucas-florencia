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

      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[1.25rem] bg-ivory px-6 py-14 shadow-[0_25px_70px_-30px_rgba(43,41,37,0.45)] ring-1 ring-ink/5 sm:px-14">
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
        className="relative z-10 flex w-full flex-col items-center text-center font-serif font-light uppercase tracking-[0.12em] text-ink"
      >
        {/* Padres en las esquinas superiores */}
        <motion.div
          variants={item}
          className="flex w-full items-start justify-between gap-6 text-[0.6rem] leading-relaxed tracking-[0.08em] sm:text-xs"
        >
          <div className="space-y-1 text-left">
            {wedding.parents.groom.map((name) => (
              <p key={name}>{name}</p>
            ))}
          </div>
          <div className="space-y-1 text-right">
            {wedding.parents.bride.map((name) => (
              <p key={name}>{name}</p>
            ))}
          </div>
        </motion.div>

        {/* Capilla (un poco más abajo) */}
        <motion.div variants={item} className="mt-12 sm:mt-14">
          <img
            src={`${import.meta.env.BASE_URL}capilla2.png`}
            alt="Capilla"
            className="mx-auto w-44 sm:w-56"
          />
        </motion.div>

        {/* Nombres de los novios */}
        <motion.h1
          variants={item}
          className="mt-5 flex flex-col items-center gap-1 text-lg leading-tight sm:text-xl"
        >
          <span>{wedding.couple.groom}</span>
          <span>{wedding.couple.bride}</span>
        </motion.h1>

        {/* Texto de invitación */}
        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-xs leading-relaxed text-stone sm:text-sm"
        >
          Te invitamos a celebrar nuestro matrimonio con una ceremonia religiosa
          en Casa Olivos de Chacabuco, Colina y a una recepción en el mismo
          lugar.
        </motion.p>

        {/* Fecha (misma tipografía) */}
        <motion.div variants={item} className="mt-8">
          <div className="inline-block tabular-nums lining-nums">
            <p className="text-lg">{month}</p>

            <div className="mt-2 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <span className="h-px w-12 bg-[#d8a7b0]" />
                <span className="text-sm">{weekday}</span>
                <span className="h-px w-12 bg-[#d8a7b0]" />
              </div>

              <span className="flex items-center justify-center text-center text-4xl leading-none sm:text-5xl">
                {day}
              </span>

              <div className="flex flex-col items-center gap-1.5">
                <span className="h-px w-12 bg-[#d8a7b0]" />
                <span className="text-sm">{year}</span>
                <span className="h-px w-12 bg-[#d8a7b0]" />
              </div>
            </div>

            <p className="mt-2 text-sm">{time}</p>
          </div>
        </motion.div>

        {/* Botón */}
        <motion.a
          variants={item}
          href="#rsvp"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease }}
          className="mt-10 rounded-full border border-ink/20 px-8 py-3 text-xs tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
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
