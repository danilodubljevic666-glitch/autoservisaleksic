import { useState, useEffect } from 'react';
import CountUp from './CountUp';

const images = ['/golf.jpg', '/audi1.jpg', '/peugeot.jpg', '/opel.jpg'];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '560px' }}
      aria-label="Hero sekcija"
    >
      {/* Background images — only these animate */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

      {/* Static content — renders once, never re-animates */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-28 sm:pb-32">
        <span className="inline-block bg-red-600 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          Nikšić, Crna Gora
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
          Auto Servis
          <span className="text-red-500 block">Aleksić</span>
        </h1>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-10 font-light px-2">
          Profesionalni servis vozila u Nikšiću
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-red-600/30 hover:scale-105"
          >
            Zakažite Servis
          </a>
          <a
            href="#usluge"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#usluge')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 active:bg-gray-100 font-bold px-7 py-3.5 rounded-full text-base transition-all duration-200"
          >
            Naše Usluge
          </a>
        </div>
      </div>

      {/* Slide dot indicators */}
      <div className="absolute bottom-[88px] sm:bottom-[96px] left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'bg-red-500 w-6 sm:w-8 h-2' : 'bg-white/40 hover:bg-white/70 w-2 h-2'
            }`}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>

      {/* Stats bar with animated counters */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/65 backdrop-blur-sm border-t border-white/10 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:py-5 grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div>
            <p className="text-red-500 font-extrabold text-xl sm:text-2xl md:text-3xl leading-none">
              <CountUp to={5} duration={1200} suffix="+" />
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Godina iskustva</p>
          </div>
          <div>
            <p className="text-red-500 font-extrabold text-xl sm:text-2xl md:text-3xl leading-none">
              <CountUp to={500} duration={1800} suffix="+" />
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Zadovoljnih klijenata</p>
          </div>
          <div>
            <p className="text-red-500 font-extrabold text-xl sm:text-2xl md:text-3xl leading-none">
              <CountUp to={24} duration={1400} suffix="h" />
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Dostupnost</p>
          </div>
        </div>
      </div>
    </section>
  );
}
