// Datos centralizados de la boda — editá acá y se refleja en toda la página.

export const wedding = {
  couple: {
    bride: 'Florencia Peirano',
    groom: 'Lucas Cantergiani',
    short: 'Lucas & Florencia',
  },
  // Fecha y hora del evento (14 de noviembre, 17:00hs).
  // El año se toma automáticamente: si el 14/11 de este año ya pasó, usa el próximo.
  date: getWeddingDate(11, 14, 17, 0),
  dateLabel: '14 de Noviembre · 17:00 hs',
  dressCode: 'Etiqueta formal',
  venues: {
    ceremony: {
      name: 'Casa Olivos',
      detail: 'Ceremonia',
      time: '17:00 hs',
    },
    party: {
      name: 'Casa Olivos',
      detail: 'Celebración',
      time: 'A continuación',
    },
  },
  // Ubicación exacta: Casa Olivos de Chacabuco (-33.0254097, -70.6773255).
  map: {
    address: 'Casa Olivos de Chacabuco',
    // Foto del lugar (Google). Se pide en tamaño grande cambiando el sufijo wXXX-hYYY.
    photoSrc:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn0JaEw7lIlXOKC58c1Kgf5EfKPSZDC0xCX7U6elAX5awojKxl6Fag77ImeJA9fwqBzsbA9EMdEVzMDi8wK0ECHiiPsctdVrPSSw__ikYFqheE3BEpkrKfwPiu14Pf6_0REE34p=w1600-h1000-k-no',
    photoAlt: 'Casa Olivos de Chacabuco',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Casa+Olivos+de+Chacabuco',
  },
  story: [
    {
      year: '2016',
      title: 'Nos conocimos',
      text: 'Un encuentro casual entre amigos que, sin saberlo, lo cambiaría todo.',
    },
    {
      year: '2018',
      title: 'Primer viaje juntos',
      text: 'Descubrimos que el mundo se disfruta más de a dos.',
    },
    {
      year: '2021',
      title: 'Nuestro hogar',
      text: 'Elegimos un lugar para construir día a día lo nuestro.',
    },
    {
      year: '2025',
      title: 'La propuesta',
      text: 'Una pregunta, una lágrima y un sí que todavía resuena.',
    },
  ],
  // Placeholders elegantes; reemplazá los src por tus fotos en /public o una URL.
  gallery: [
    { src: '', alt: 'Foto de la pareja 1' },
    { src: '', alt: 'Foto de la pareja 2' },
    { src: '', alt: 'Foto de la pareja 3' },
    { src: '', alt: 'Foto de la pareja 4' },
    { src: '', alt: 'Foto de la pareja 5' },
    { src: '', alt: 'Foto de la pareja 6' },
  ],
}

function getWeddingDate(month, day, hour, minute) {
  const now = new Date()
  const year = now.getFullYear()
  const target = new Date(year, month - 1, day, hour, minute, 0)
  if (target.getTime() < now.getTime()) {
    target.setFullYear(year + 1)
  }
  return target
}
