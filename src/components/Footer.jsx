import { useInView } from '../hooks/useInView';

const footerLinks = [
  { label: 'Početna', href: '#hero' },
  { label: 'O Nama', href: '#o-nama' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Kontakt', href: '#kontakt' },
];

const uslugeLista = [
  'Mehanika vozila',
  'Kompjuterska dijagnostika',
  'Redovni servisi',
  'Popravka trapova',
  'Zamjena kočnica',
  'Geometrija točkova',
];

export default function Footer() {
  const [contentRef, contentInView] = useInView(0.05);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400" aria-label="Footer">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

      <div
        ref={contentRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16
          ${contentInView ? 'anim-fade-up' : 'opacity-0'}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                  <circle cx="7.5" cy="14.5" r="1.5"/>
                  <circle cx="16.5" cy="14.5" r="1.5"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-base sm:text-lg leading-none block">Auto Servis</span>
                <span className="text-red-500 font-bold text-base sm:text-lg leading-none block">Aleksić</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Profesionalni auto servis u Nikšiću. Više od 5 godina iskustva.
              Vlasnik Miloš Aleksić. Vaše vozilo u sigurnim rukama.
            </p>
            <div className="flex gap-2.5">
              <a
                href="tel:+38269749666"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Pozovite nas"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="https://wa.me/38269749666"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Navigacija</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-gray-500 hover:text-red-400 transition-colors duration-200 text-sm cursor-pointer bg-transparent border-none text-left"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Usluge</h4>
            <ul className="space-y-2.5">
              {uslugeLista.map((u) => (
                <li key={u}>
                  <button
                    onClick={() => handleScroll('#usluge')}
                    className="text-gray-500 hover:text-red-400 transition-colors duration-200 text-sm cursor-pointer bg-transparent border-none text-left"
                  >
                    → {u}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Kontakt</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:+38269749666" className="flex items-start gap-3 text-sm hover:text-white transition-colors">
                  <span className="text-red-500 flex-shrink-0">📞</span>
                  <span>+382 69 749 666</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="text-red-500 flex-shrink-0">📍</span>
                <span>Nikšić, Crna Gora</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="text-red-500 flex-shrink-0 mt-0.5">⏰</span>
                <span>
                  Pon–Pet: 08:00–17:00<br />
                  Subota: 08:00–14:00<br />
                  <span className="text-gray-600">Nedjelja: Zatvoreno</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-gray-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} Auto Servis Aleksić. Sva prava zadržana.
          </p>
          <p className="text-gray-700 text-xs">
            Nikšić, Crna Gora — +382 69 749 666
          </p>
        </div>
      </div>
    </footer>
  );
}
