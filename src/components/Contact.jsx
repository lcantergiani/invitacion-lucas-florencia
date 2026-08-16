import { motion } from 'motion/react'
import { fadeUp, viewportReveal } from '../lib/motion'
import SectionTitle from './SectionTitle'

const ease = [0.22, 1, 0.36, 1]

// Número de WhatsApp en formato internacional sin signos ni espacios.
const WHATSAPP_NUMBER = '56962076590'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.94-.26-.1-.46-.15-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.56-.48-.48-.65-.49l-.56-.01c-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.8 1.18 2.99.15.19 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.61.69.22 1.32.19 1.81.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12.05 21.5h-.01a9.42 9.42 0 01-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 01-1.44-5.01c0-5.2 4.24-9.43 9.45-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 012.76 6.67c0 5.2-4.24 9.43-9.45 9.43zm8.04-17.47A11.32 11.32 0 0012.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.67L.63 23.25l5.65-1.48a11.3 11.3 0 005.76 1.47h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.29-8.01z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contacto" className="section-pad">
      <motion.div {...viewportReveal} className="mx-auto max-w-xl text-center">
        <SectionTitle eyebrow="¿Dudas?" title="Contáctanos" />

        <motion.a
          variants={fadeUp}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease }}
          className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-sans text-xs uppercase tracking-widest2 text-ivory transition-colors hover:bg-accent"
        >
          <WhatsAppIcon />
          Escríbenos por WhatsApp
        </motion.a>

        <motion.p
          variants={fadeUp}
          className="mt-5 font-sans text-sm font-light text-stone"
        >
          +56 9 6207 6590
        </motion.p>
      </motion.div>
    </section>
  )
}
