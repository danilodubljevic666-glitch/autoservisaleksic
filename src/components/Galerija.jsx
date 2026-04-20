import { useState } from 'react';

const galerija = [
  {
    src: '/radionica.jpg',
    alt: 'Radionica Auto Servis Aleksić',
    title: 'Ford Focus ',
    opis: 'Moderno opremljena radionica sa svom potrebnom dijagnostičkom opremom.',
  },
  {
    src: '/golf.jpg',
    alt: 'Servis Volkswagen Golf 6',
    title: 'Servis VW Golf 6',
    opis: 'Kompletno servisiranje Volkswagen Golf 6 — zamjena ulja, filtera i provjera svih sistema.',
  },
  {
    src: '/audi1.jpg',
    alt: 'Dijagnostika Audi',
    title: 'Dijagnostika Audi A4',
    opis: 'Kompjuterska dijagnostika Audi A4 — očitavanje grešaka i kalibracija elektronskih sistema.',
  },
  {
    src: '/opelastra.jpg',
    alt: 'Servis Opel Astra',
    title: 'Servis Opel Astra',
    opis: 'Redovni godišnji servis Opel Astra — pregled trapova, kočnica i kompletnog vozila.',
  },
  {
    src: '/renault.jpg',
    alt: 'Servis Renault',
    title: 'Servis Renault',
    opis: 'Kompletno servisiranje Renault vozila — dijagnostika, zamjena ulja i pregled sistema kočenja.',
  },
  {
    src: '/ford-tranzit.jpg',
    alt: 'Servis Ford Transit',
    title: 'Servis Ford Transit',
    opis: 'Servis i popravka Ford Transit — motora, mjenjača i kompletnog sistema dostavnog vozila.',
  },
];

export default function Galerija() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      id="galerija"
      className="py-16 sm:py-20 lg:py-24 bg-gray-950"
      aria-labelledby="galerija-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-red-500 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
            Naš rad
          </span>
          <h2
            id="galerija-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5"
          >
            Galerija Radova
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-red-600 mx-auto mb-5" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Pogledajte neke od radova koje smo obavili u našoj radionici.
            Svaki posao radimo s pažnjom i profesionalizmom.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {galerija.map((item, i) => (
            <button
              key={i}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => setLightbox(item)}
              aria-label={`Povećaj sliku: ${item.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay — hidden on touch, shown on hover/focus */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                <h3 className="text-white font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-snug">{item.opis}</p>
              </div>

              {/* Always-visible bottom label */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-xs sm:text-sm">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div
            className="max-w-4xl w-full bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[55vh] sm:max-h-[65vh] lg:max-h-[70vh] object-cover"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 bg-black/60 text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-red-600 transition-colors text-sm"
                aria-label="Zatvori"
              >
                ✕
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{lightbox.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{lightbox.opis}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
