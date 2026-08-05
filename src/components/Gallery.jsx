import { motion } from 'motion/react'
import { wedding } from '../data/wedding'
import { viewportReveal } from '../lib/motion'
import SectionTitle from './SectionTitle'

const item = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Gallery() {
  return (
    <section id="galeria" className="section-pad bg-sand/40">
      <motion.div {...viewportReveal} className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Momentos" title="Galería" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {wedding.gallery.map((photo, i) => (
            <motion.figure
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-sand to-stone/20"
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                // Placeholder elegante mientras no haya foto real
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-serif text-4xl font-light text-stone/40">
                    {i + 1}
                  </span>
                </div>
              )}
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
