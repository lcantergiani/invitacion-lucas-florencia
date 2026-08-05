import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Hero from './Hero'
import WaxSeal from './WaxSeal'
import Olive from './Olive'

/**
 * Intro tipo "carta de amor".
 *
 * Se ve primero el sobre cerrado con su sello de lacre. Al deslizar hacia
 * abajo, el sello se derrite, la solapa se abre y el sobre se acerca y se
 * disuelve, revelando el banner (Hero) que estaba FIJO detrás — no debajo.
 * Al terminar la apertura, la escena se libera y el scroll continúa
 * naturalmente hacia el resto de la landing.
 *
 * La escena queda "pinada" (sticky) durante toda la apertura para que el
 * Hero no se mueva mientras el sobre se abre.
 */
export default function Intro() {
  const driverRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: driverRef,
    offset: ['start start', 'end start'],
  })

  // La apertura termina justo antes de que la escena se despine (~0.565).
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])
  const sealOpacity = useTransform(scrollYProgress, [0.04, 0.17], [1, 0])
  const sealScale = useTransform(scrollYProgress, [0.04, 0.17], [1, 0.4])
  const sealY = useTransform(scrollYProgress, [0.04, 0.17], [0, 10])
  const flapRotate = useTransform(scrollYProgress, [0.1, 0.4], [0, -180])
  // El sobre se acerca (zoom) y se disuelve.
  const envScale = useTransform(scrollYProgress, [0.4, 0.55], [1, 1.5])
  const envOpacity = useTransform(scrollYProgress, [0.44, 0.55], [1, 0])
  // El banner aparece en su lugar, detrás del sobre.
  const heroOpacity = useTransform(scrollYProgress, [0.4, 0.54], [0, 1])
  const heroScale = useTransform(scrollYProgress, [0.4, 0.55], [0.94, 1])

  // Avisá (una sola vez) cuando el sobre ya se abrió, para arrancar la música.
  const [opened, setOpened] = useState(false)
  const openedRef = useRef(false)
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (!openedRef.current && v >= 0.5) {
        openedRef.current = true
        setOpened(true)
        window.dispatchEvent(new Event('wedding:open'))
      }
    })
    return unsub
  }, [scrollYProgress])

  // Al presionar el botón (o tocar el sobre): ese gesto habilita el audio y
  // abrimos solos animando el scroll hasta revelar el banner (siguiente etapa).
  // Como la apertura del sobre está atada al scroll, este desplazamiento suave
  // reproduce la animación de apertura; al cruzar el 50% arranca la música.
  const handleOpenClick = () => {
    if (openedRef.current) return
    const el = driverRef.current
    if (!el) return
    const total = el.offsetHeight - window.innerHeight
    const base = el.offsetTop
    const startY = window.scrollY
    // Punto donde el banner ya quedó completamente revelado.
    const openY = base + total * 0.58
    // Final del "riel" del intro: mismo cuadro visual, pero listo para que el
    // próximo scroll pase directo a la siguiente sección (sin tramo muerto).
    const endY = base + total * 0.995
    const duration = 4200
    const easeInOut = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    let startTime = null
    const step = (ts) => {
      if (startTime === null) startTime = ts
      const p = Math.min(1, (ts - startTime) / duration)
      window.scrollTo(0, startY + (openY - startY) * easeInOut(p))
      if (p < 1) {
        requestAnimationFrame(step)
      } else {
        // Saltar el tramo muerto: quedamos en el banner, al final del intro.
        window.scrollTo(0, endY)
      }
    }
    requestAnimationFrame(step)
  }

  return (
    <section ref={driverRef} className="relative h-[230vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Banner fijo detrás, revelado en su lugar */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <Hero />
        </motion.div>

        {/* Sobre encima (no captura clics para no bloquear el banner) */}
        <motion.div
          style={{ opacity: envOpacity }}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-b from-ivory via-ivory to-sand px-6"
        >
          <motion.div style={{ scale: envScale }} className="relative">
            {/* Capa clickeable: abrir tocando el sobre (habilita el audio) */}
            {!opened && (
              <button
                type="button"
                onClick={handleOpenClick}
                aria-label="Abrir la invitación"
                className="pointer-events-auto absolute inset-0 z-30 cursor-pointer"
              />
            )}

            {/* Ramas de olivo que enmarcan el sobre */}
            <Olive className="pointer-events-none absolute top-1/2 -left-36 w-32 -translate-y-1/2 opacity-60 sm:-left-52 sm:w-52" />
            <Olive className="pointer-events-none absolute top-1/2 -right-36 w-32 -translate-y-1/2 -scale-x-100 opacity-60 sm:-right-52 sm:w-52" />

            <div className="relative" style={{ perspective: 1600 }}>
              {/* Papel / cuerpo del sobre — sobre de carta crema (horizontal) */}
              <div className="relative h-[15.5rem] w-[23rem] overflow-hidden rounded-[5px] shadow-[0_40px_80px_-32px_rgba(43,41,37,0.5),0_2px_6px_rgba(43,41,37,0.12)] ring-1 ring-[#cabfa2]/50 sm:h-[21rem] sm:w-[31rem]">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 200 260"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="envPaper" x1="0" y1="0" x2="0.15" y2="1">
                      <stop offset="0%" stopColor="#f8f3e8" />
                      <stop offset="55%" stopColor="#f4efe0" />
                      <stop offset="100%" stopColor="#f1eada" />
                    </linearGradient>
                    <filter id="envGrain">
                      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="8" result="n" />
                      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.30  0 0 0 0 0.24  0 0 0 0 0.14  0 0 0 0.5 0" />
                    </filter>
                  </defs>

                  <rect width="200" height="260" fill="url(#envPaper)" />

                  {/* Grano de papel (sutil y uniforme) */}
                  <rect width="200" height="260" filter="url(#envGrain)" opacity="0.14" style={{ mixBlendMode: 'multiply' }} />
                </svg>
              </div>

              {/* Solapa (triángulo que se abre hacia arriba) */}
              <motion.div
                aria-hidden
                style={{ rotateX: flapRotate, transformOrigin: 'top center' }}
                className="absolute left-0 top-0 h-1/2 w-full"
              >
                <svg
                  className="h-full w-full"
                  viewBox="0 0 200 130"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="flapPaper" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f8f3e8" />
                      <stop offset="60%" stopColor="#f4efe0" />
                      <stop offset="100%" stopColor="#f1eada" />
                    </linearGradient>
                    <filter id="flapGrain">
                      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n" />
                      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.30  0 0 0 0 0.24  0 0 0 0 0.14  0 0 0 0.5 0" />
                    </filter>
                  </defs>
                  <polygon points="0,0 200,0 100,130" fill="url(#flapPaper)" />
                  <polygon points="0,0 200,0 100,130" fill="none" filter="url(#flapGrain)" opacity="0.14" style={{ mixBlendMode: 'multiply' }} />
                  {/* Filo de la solapa: solo una línea de luz muy sutil (sin sombra) */}
                  <path d="M0 0 L100 130 L200 0" fill="none" stroke="#fbf4e2" strokeOpacity="0.5" strokeWidth="0.8" />
                </svg>
              </motion.div>

              {/* Sello de lacre rojo (el div externo centra; el interno anima
                  scale/opacity/y sin pisar el translate de centrado) */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <motion.div style={{ opacity: sealOpacity, scale: sealScale, y: sealY }}>
                  <WaxSeal className="h-[4.5rem] w-[4.5rem] drop-shadow-md" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Botón para abrir la invitación + pista */}
          {!opened && (
            <motion.div
              style={{ opacity: hintOpacity }}
              className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
            >
              <button
                type="button"
                onClick={handleOpenClick}
                className="pointer-events-auto rounded-full bg-ink px-9 py-3.5 font-sans text-xs uppercase tracking-widest2 text-ivory shadow-lg transition-colors hover:bg-accent"
              >
                Abrir invitación
              </button>
              <span className="font-sans text-[0.7rem] uppercase tracking-widest2 text-stone/70">
                o deslizá para abrir
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
