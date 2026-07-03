import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const navLinks = t.nav.links;
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

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled || menuOpen ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}
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
              <span className="text-white font-bold text-base sm:text-lg leading-none block">{t.common.brandLine1}</span>
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
            <button
              onClick={toggleLang}
              style={{ animationDelay: '400ms' }}
              className={`flex items-center gap-1 text-gray-300 hover:text-red-500 transition-colors duration-200 font-semibold text-sm tracking-wide cursor-pointer bg-transparent border border-gray-600 hover:border-red-500 rounded-full px-3 py-1.5
                ${mounted ? 'anim-fade-up' : 'opacity-0'}`}
              aria-label="Change language"
            >
              <span className={lang === 'sr' ? 'text-white' : ''}>SR</span>
              <span className="text-gray-500">/</span>
              <span className={lang === 'en' ? 'text-white' : ''}>EN</span>
            </button>
            <a
              href="tel:+38269749666"
              style={{ animationDelay: '440ms' }}
              className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 lg:px-5 rounded-full font-semibold text-sm transition-colors duration-200 whitespace-nowrap
                ${mounted ? 'anim-fade-up' : 'opacity-0'}`}
            >
              {t.nav.call}
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleLang}
              className="text-gray-200 border border-gray-600 rounded-full px-2.5 py-1 text-xs font-semibold flex items-center gap-1"
              aria-label="Change language"
            >
              <span className={lang === 'sr' ? 'text-white' : 'text-gray-400'}>SR</span>
              <span className="text-gray-500">/</span>
              <span className={lang === 'en' ? 'text-white' : 'text-gray-400'}>EN</span>
            </button>
            <button
              className="text-white p-2 -mr-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
      </div>
    </nav>

    {/* Mobile Menu — full-screen slide-in panel (rendered as a sibling of <nav>, not
        nested inside it, since nav's transform/backdrop-blur would otherwise become
        the containing block for this fixed-position panel and break `inset-0`) */}
    <div
      className={`md:hidden fixed inset-0 z-40 bg-gray-900 transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      }`}
    >
      <div className="h-full flex flex-col items-center justify-center gap-1 px-8">
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms' }}
            className={`text-gray-200 hover:text-red-500 transition-all duration-300 font-semibold text-2xl sm:text-3xl py-4 cursor-pointer bg-transparent border-none w-full text-center
              ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {link.label}
          </button>
        ))}
        <a
          href="tel:+38269749666"
          style={{ transitionDelay: menuOpen ? `${100 + navLinks.length * 60}ms` : '0ms' }}
          className={`mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold text-center text-lg transition-all duration-300
            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          📞 {t.nav.call}
        </a>
      </div>
    </div>
    </>
  );
}
