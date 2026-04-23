import { useInView } from '../hooks/useInView';

const usluge = [
  {
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Mehanika',
    boja: 'red',
    kratakOpis: 'Popravka i zamjena svih mehaničkih dijelova',
    stavke: [
      'Popravka motora i mjenjača',
      'Zamjena kočnica i diskova',
      'Popravka sistema hlađenja',
      'Zamjena zupčastih kaiševa',
      'Popravka sistema goriva',
      'Generalni remont vozila',
    ],
  },
  {
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Dijagnostika',
    boja: 'blue',
    kratakOpis: 'Kompjuterska dijagnostika svih sistema vozila',
    stavke: [
      'OBD2 kompjuterska dijagnostika',
      'Čitanje i brisanje grešaka',
      'Dijagnostika ABS sistema',
      'Dijagnostika airbag sistema',
      'Kalibracija elektronike',
      'Provjera senzora i aktuatora',
    ],
  },
  {
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Servisi',
    boja: 'green',
    kratakOpis: 'Redovni i vanredni servisni pregledi',
    stavke: [
      'Zamjena motornog ulja i filtera',
      'Zamjena filtera vazduha i klime',
      'Servis mjenjača i kočnica',
      'Provjera tečnosti i pritiska',
      'Servis klimatizacije',
      'Tehnički pregled priprema',
    ],
  },
  {
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Trapovi',
    boja: 'orange',
    kratakOpis: 'Popravka i podešavanje sistema vožnje',
    stavke: [
      'Zamjena amortizera i opruga',
      'Popravka ležajeva točkova',
      'Zamjena stabilizatora',
      'Geometrija i poravnanje točkova',
      'Zamjena nastavaka i karike',
      'Balansiranje točkova',
    ],
  },
];

const bojaMap = {
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    icon: 'bg-red-600',    bullet: 'bg-red-500',    tag: 'text-red-700 bg-red-100'    },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   icon: 'bg-blue-600',   bullet: 'bg-blue-500',   tag: 'text-blue-700 bg-blue-100'   },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  icon: 'bg-green-600',  bullet: 'bg-green-500',  tag: 'text-green-700 bg-green-100'  },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'bg-orange-600', bullet: 'bg-orange-500', tag: 'text-orange-700 bg-orange-100' },
};

export default function Usluge() {
  const [headingRef, headingInView] = useInView(0.3);
  const [cardsRef, cardsInView] = useInView(0.05);
  const [ctaRef, ctaInView] = useInView(0.2);

  return (
    <section
      id="usluge"
      className="py-16 sm:py-20 lg:py-24 bg-gray-50"
      aria-labelledby="usluge-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-12 sm:mb-16 ${headingInView ? 'anim-fade-up' : 'opacity-0'}`}
        >
          <span className="inline-block text-red-600 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
            Šta nudimo
          </span>
          <h2
            id="usluge-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Naše Usluge
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-red-600 mx-auto mb-5" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Pružamo kompletan spektar auto-servisnih usluga. Sve na jednom mjestu,
            sa garantovanim kvalitetom i povoljnim cijenama.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {usluge.map((u, i) => {
            const c = bojaMap[u.boja];
            return (
              <article
                key={i}
                style={{ animationDelay: `${i * 110}ms` }}
                className={`${c.bg} border ${c.border} rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col
                  ${cardsInView ? 'anim-fade-up' : 'opacity-0'}`}
                aria-label={u.title}
              >
                <div className={`${c.icon} text-white w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-md flex-shrink-0`}>
                  {u.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">{u.kratakOpis}</p>

                <ul className="space-y-1.5 sm:space-y-2 flex-1">
                  {u.stavke.map((s, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className={`${c.bullet} rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0`} />
                      {s}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`inline-block mt-5 text-xs sm:text-sm font-semibold ${c.tag} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 hover:opacity-80 self-start`}
                >
                  Naručite →
                </a>
              </article>
            );
          })}
        </div>

        {/* CTA banner */}
        <div
          ref={ctaRef}
          className={`mt-10 sm:mt-14 bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left
            ${ctaInView ? 'anim-fade-up' : 'opacity-0'}`}
        >
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              Niste sigurni šta vam treba?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Pozovite nas i naš tim će Vam pomoći savjetom besplatno.
            </p>
          </div>
          <a
            href="tel:+38269749666"
            className="flex-shrink-0 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap"
          >
            📞 +382 69 749 666
          </a>
        </div>
      </div>
    </section>
  );
}
