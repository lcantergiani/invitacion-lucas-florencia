import { motion } from 'motion/react'
import { fadeUp } from '../lib/motion'

// Encabezado reutilizable con eyebrow + título en serif.
export default function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow mb-4">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-serif text-4xl font-light text-ink sm:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.span
        variants={fadeUp}
        className="mt-6 block h-px w-16 bg-accent/40"
      />
    </div>
  )
}
