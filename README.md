# Parte de Matrimonio · Lucas & Florencia

Landing page de una sola página para el parte de boda. Elegante, minimalista y animada.

## Stack

- **React 18** + **Vite 6**
- **TailwindCSS 3**
- **motion** (Framer Motion) para animaciones y scroll reveals

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí el navegador en la URL que muestra Vite (por defecto `http://localhost:5173`).

Para compilar producción:

```bash
npm run build
npm run preview
```

## Estructura

```
.
├── index.html                 # HTML raíz + fuentes de Google
├── package.json
├── vite.config.js
├── tailwind.config.js         # Paleta y tipografías personalizadas
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               # Punto de entrada
    ├── App.jsx                # Ensambla las secciones en orden
    ├── index.css              # Tailwind + estilos base + prefers-reduced-motion
    ├── data/
    │   └── wedding.js         # ⭐ TODOS los datos de la boda (editá acá)
    ├── lib/
    │   └── motion.js          # Variantes de animación reutilizables
    └── components/
        ├── Hero.jsx           # 1. Portada full-screen (fade + subida)
        ├── Countdown.jsx      # 2. Cuenta regresiva en vivo
        ├── Story.jsx          # 3. Timeline "Nuestra historia" (scroll reveal)
        ├── Details.jsx        # 4. Ceremonia / fiesta / dress code con íconos
        ├── Location.jsx       # 5. Mapa + cómo llegar
        ├── Gallery.jsx        # 6. Galería con animación al aparecer
        ├── RSVP.jsx           # 7. Formulario de confirmación
        ├── SectionTitle.jsx   # Encabezado reutilizable
        └── Footer.jsx
```

## Personalización rápida

- **Datos** (nombres, fecha, lugares, historia, galería): `src/data/wedding.js`.
- **Fotos de la galería**: poné tus imágenes en `public/` y cargá el `src` en `wedding.gallery`.
- **Mapa**: reemplazá `map.embedSrc` y `map.directionsUrl` por tu dirección real.
- **Colores y fuentes**: `tailwind.config.js` (`ivory`, `sand`, `accent`, etc.).
- **RSVP**: el formulario hoy hace `console.log`. Conectá tu servicio (Formspree,
  Google Forms, API propia…) en `handleSubmit` de `src/components/RSVP.jsx`.

## Accesibilidad

Se respeta `prefers-reduced-motion`: si el usuario tiene reducido el movimiento en su
sistema, las animaciones se desactivan (via CSS global y el manejo interno de `motion`).
