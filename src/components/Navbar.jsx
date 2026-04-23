import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Početna', href: '#hero' },
  { label: 'O Nama', href: '#o-nama' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}
        ${mounted ? 'anim-slide-down' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer bg-transparent border-none"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                <circle cx="7.5" cy="14.5" r="1.5"/>
                <circle cx="16.5" cy="14.5" r="1.5"/>
              </svg>
            </div>
            <div className="text-left">
              <span className="text-white font-bold text-base sm:text-lg leading-none block">Auto Servis</span>
              <span className="text-red-500 font-bold text-base sm:text-lg leading-none block">Aleksić</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{ animationDelay: `${80 + i * 60}ms` }}
                className={`text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium text-sm tracking-wide cursor-pointer bg-transparent border-none
                  ${mounted ? 'anim-fade-up' : 'opacity-0'}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+38269749666"
              style={{ animationDelay: '440ms' }}
              className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 lg:px-5 rounded-full font-semibold text-sm transition-colors duration-200 whitespace-nowrap
                ${mounted ? 'anim-fade-up' : 'opacity-0'}`}
            >
              Pozovite nas
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Zatvori menu' : 'Otvori menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-gray-900 border-t border-gray-800`}
      >
        <div className="px-4 py-4 flex flex-col">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-gray-300 hover:text-red-400 transition-colors font-medium text-left py-3 cursor-pointer bg-transparent border-none text-base ${
                i < navLinks.length - 1 ? 'border-b border-gray-800' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+38269749666"
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-semibold text-center text-base transition-colors"
          >
            📞 Pozovite nas
          </a>
        </div>
      </div>
    </nav>
  );
}
