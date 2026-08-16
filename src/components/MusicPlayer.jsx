import { useEffect, useRef, useState } from 'react'

/**
 * Reproductor de música de fondo.
 *
 * Los navegadores no permiten reproducir audio con sonido hasta que el
 * usuario interactúa. Por eso el primer gesto real (tap/click/tecla) sólo
 * "desbloquea" el audio en silencio, y la canción arranca recién cuando el
 * sobre se abre (evento `wedding:open` que dispara el Intro). Hay un botón
 * flotante para silenciar o volver a reproducir en cualquier momento.
 *
 * Para usarlo: poné tu canción en `public/` (por ej. public/cancion.mp3)
 * y pasá su ruta en la prop `src` (por defecto "/cancion.mp3").
 */
export default function MusicPlayer({ src = '/cancion.mp3', volume = 0.6 }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const startedRef = useRef(false)

  // Sube/baja el volumen suavemente.
  const fadeTo = (target, ms = 1600) => {
    const a = audioRef.current
    if (!a) return
    const steps = 24
    const start = a.volume
    let i = 0
    const id = setInterval(() => {
      i++
      a.volume = Math.min(1, Math.max(0, start + (target - start) * (i / steps)))
      if (i >= steps) clearInterval(id)
    }, ms / steps)
  }

  // Arranca la reproducción audible (con fade-in).
  const startPlayback = async () => {
    const a = audioRef.current
    if (!a) return false
    try {
      a.muted = false
      a.volume = 0
      await a.play()
      startedRef.current = true
      setPlaying(true)
      fadeTo(volume)
      return true
    } catch {
      // Sin gesto que lo habilite todavía: reintenta en el próximo.
      return false
    }
  }

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      startPlayback()
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  // La música arranca en la primera interacción real del usuario.
  useEffect(() => {
    const events = ['pointerdown', 'touchstart', 'keydown', 'click']
    const cleanup = () =>
      events.forEach((e) => window.removeEventListener(e, tryStart))
    const tryStart = async () => {
      if (startedRef.current) return
      const ok = await startPlayback()
      if (ok) cleanup()
    }
    events.forEach((e) => window.addEventListener(e, tryStart, { passive: true }))
    return cleanup
  }, [])

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Silenciar música' : 'Reproducir música'}
        className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-ivory/80 text-ink shadow-md backdrop-blur transition-colors hover:border-accent hover:text-accent"
      >
        {playing ? (
          // Sonido activo (con ondas)
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 9v6h4l5 4V5L8 9H4z" />
            <path d="M16 9a3 3 0 0 1 0 6" />
            <path d="M18.5 7a6 6 0 0 1 0 10" />
          </svg>
        ) : (
          // Silenciado
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 9v6h4l5 4V5L8 9H4z" />
            <path d="M22 9l-6 6" />
            <path d="M16 9l6 6" />
          </svg>
        )}
      </button>
    </>
  )
}
