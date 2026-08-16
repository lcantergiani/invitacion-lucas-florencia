import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { wedding } from '../data/wedding'
import { viewportReveal, fadeUp } from '../lib/motion'
import { paperStyle } from '../lib/paper'

function getRemaining(target) {
  const total = Math.max(0, target.getTime() - Date.now())
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((total / (1000 * 60)) % 60)
  const seconds = Math.floor((total / 1000) % 60)
  return { total, days, hours, minutes, seconds }
}

export default function Countdown() {
  const [time, setTime] = useState(() => getRemaining(wedding.date))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(wedding.date)), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Días', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Minutos', value: time.minutes },
    { label: 'Segundos', value: time.seconds },
  ]

  return (
    <section id="cuenta-regresiva" className="section-pad bg-sand/40">
      <motion.div
        {...viewportReveal}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-4">
          Falta poco
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mb-14 font-serif text-3xl font-light text-ink sm:text-4xl"
        >
          {time.total > 0 ? 'Cuenta regresiva' : '¡Hoy es el día!'}
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
        >
          {units.map((u) => (
            <div
              key={u.label}
              style={paperStyle}
              className="flex flex-col items-center rounded-2xl bg-ivory/80 px-4 py-8 shadow-[0_1px_30px_-15px_rgba(43,41,37,0.25)]"
            >
              <span className="font-serif text-4xl font-light tabular-nums text-ink sm:text-5xl">
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="mt-3 font-sans text-[0.65rem] uppercase tracking-widest2 text-stone">
                {u.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
