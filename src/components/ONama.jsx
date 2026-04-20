const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Certificirani Tehničari',
    desc: 'Naš tim čine obučeni i iskusni mehaničari sa dugogodišnjom praksom.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Brza Usluga',
    desc: 'Poštujemo Vaše vrijeme. Servis obavljamo brzo i efikasno bez kompromisa u kvalitetu.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Povoljne Cijene',
    desc: 'Konkurentne cijene uz garanciju kvalitetno obavljenog posla i originalnih dijelova.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Prijatan Odnos',
    desc: 'Sa svakim klijentom gradimo dugoročno povjerenje i transparentnost u komunikaciji.',
  },
];

import CountUp from './CountUp';

export default function ONama() {
  return (
    <section
      id="o-nama"
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="o-nama-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-red-600 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
            Ko smo mi
          </span>
          <h2
            id="o-nama-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            O Nama
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Main content — stacked on mobile, side-by-side from lg */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-5 leading-snug">
              Miloš Aleksić —{' '}
              <span className="text-red-600">stručnjak kome možete vjerovati</span>
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
              Auto Servis Aleksić je porodični servis smješten u srcu Nikšića, koji s ponosom
              radi već više od <strong className="text-gray-800">5 godina</strong>. Osnivač i vlasnik{' '}
              <strong className="text-gray-800">Miloš Aleksić</strong> svoje znanje i strast
              prema automobilima pretvorio je u moderni servis kojemu se klijenti uvijek rado vraćaju.
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Opremljeni savremenom dijagnostičkom opremom i bogatim iskustvom na svim vrstama vozila,
              garantujemo brzu, preciznu i ekonomičnu uslugu. Svaki automobil tretiramo kao vlastiti.
            </p>

            {/* Stats pills */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="flex flex-col items-center text-center bg-red-50 border border-red-100 rounded-xl px-3 py-3 sm:px-5 sm:py-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-red-600 leading-none"><CountUp to={5} duration={1200} suffix="+" /></span>
                <span className="text-gray-600 font-medium text-xs sm:text-sm mt-1">Godina iskustva</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 sm:px-5 sm:py-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-none"><CountUp to={500} duration={1800} suffix="+" /></span>
                <span className="text-gray-600 font-medium text-xs sm:text-sm mt-1">Zadovoljnih klijenata</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 sm:px-5 sm:py-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-none"><CountUp to={24} duration={1400} suffix="h" /></span>
                <span className="text-gray-600 font-medium text-xs sm:text-sm mt-1">Hitni slučajevi</span>
              </div>
            </div>
          </div>

          {/* Image side — extra margin so badges don't clip on mobile */}
          <div className="order-1 lg:order-2 relative mt-4 mb-8 sm:mt-6 sm:mb-10 lg:mt-0 lg:mb-0 mx-4 sm:mx-6 lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/radionica.jpg"
                alt="Auto Servis Aleksić radionica u Nikšiću"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Bottom-left badge */}
            <div className="absolute -bottom-6 left-2 sm:left-0 sm:-bottom-5 sm:-left-5 bg-red-600 text-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl z-10">
              <p className="font-extrabold text-2xl sm:text-3xl leading-none">5★</p>
              <p className="text-red-200 text-xs font-medium mt-1">Ocjena klijenata</p>
            </div>

            {/* Top-right badge */}
            <div className="absolute -top-4 right-2 sm:right-0 sm:-top-4 sm:-right-4 bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg border border-gray-100 z-10">
              <p className="text-gray-900 font-bold text-xs sm:text-sm">📍 Nikšić, CG</p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all duration-300 rounded-2xl p-5 sm:p-6 text-center group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100 group-hover:bg-red-600 text-red-600 group-hover:text-white rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                {f.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
