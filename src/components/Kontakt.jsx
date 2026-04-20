import { useState } from 'react';

export default function Kontakt() {
  const [form, setForm] = useState({ ime: '', telefon: '', poruka: '' });
  const [poslan, setPoslan] = useState(false);
  const [greska, setGreska] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setGreska('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.ime.trim() || !form.telefon.trim() || !form.poruka.trim()) {
      setGreska('Molimo popunite sva polja.');
      return;
    }
    const msg = encodeURIComponent(
      `Pozdrav! Moje ime je ${form.ime}. ${form.poruka} Kontakt: ${form.telefon}`
    );
    window.open(`https://wa.me/38269749666?text=${msg}`, '_blank');
    setPoslan(true);
    setForm({ ime: '', telefon: '', poruka: '' });
  };

  return (
    <section
      id="kontakt"
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="kontakt-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-red-600 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
            Pronađite nas
          </span>
          <h2
            id="kontakt-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Lokacija & Kontakt
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-red-600 mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Posjetite nas u Nikšiću ili nas kontaktirajte putem telefona. Uvijek smo tu za Vas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Google Map — responsive height */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-64 sm:h-80 lg:h-auto lg:min-h-[500px]">
            <iframe
              title="Auto Servis Aleksić Lokacija"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1464.989072398696!2d18.958371321495807!3d42.74651462050622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da9be9f00b685%3A0xe51765811759a936!2sAuto%20servis%20%22Aleksi%C4%87%22!5e0!3m2!1sen!2s!4v1776724377836!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Info cards — 2-col on xs+, 1-col on tiny */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              <a
                href="tel:+38269749666"
                className="flex items-center gap-3 sm:gap-4 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Telefon</p>
                  <p className="text-gray-900 font-bold text-sm sm:text-base truncate">+382 69 749 666</p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Adresa</p>
                  <p className="text-gray-900 font-bold text-sm sm:text-base">Nikšić, CG</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Radno Vrijeme</p>
                  <p className="text-gray-900 font-bold text-xs sm:text-sm">Pon–Pet: 08:00–17:00</p>
                  <p className="text-gray-900 font-bold text-xs sm:text-sm">Sub: 08:00–14:00</p>
                </div>
              </div>

              <a
                href="https://wa.me/38269749666"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">WhatsApp</p>
                  <p className="text-green-700 font-bold text-sm sm:text-base">Pišite nam</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-7">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-5">Pošaljite upit</h3>

              {poslan ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="text-4xl sm:text-5xl mb-3">✅</div>
                  <p className="text-green-400 font-semibold text-base sm:text-lg">Poruka je uspješno poslana!</p>
                  <p className="text-gray-400 text-sm mt-2">Kontaktiraćemo Vas uskoro.</p>
                  <button
                    onClick={() => setPoslan(false)}
                    className="mt-4 sm:mt-5 text-sm text-gray-400 hover:text-white underline"
                  >
                    Pošalji novu poruku
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="ime" className="block text-gray-400 text-xs sm:text-sm font-medium mb-1.5">
                        Vaše ime *
                      </label>
                      <input
                        id="ime"
                        name="ime"
                        type="text"
                        value={form.ime}
                        onChange={handleChange}
                        placeholder="Npr. Marko Nikolić"
                        className="w-full bg-gray-800 text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-600 transition-colors text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="telefon" className="block text-gray-400 text-xs sm:text-sm font-medium mb-1.5">
                        Telefon *
                      </label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        value={form.telefon}
                        onChange={handleChange}
                        placeholder="+382 XX XXX XXX"
                        className="w-full bg-gray-800 text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-600 transition-colors text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="poruka" className="block text-gray-400 text-xs sm:text-sm font-medium mb-1.5">
                        Poruka / Opis kvara *
                      </label>
                      <textarea
                        id="poruka"
                        name="poruka"
                        value={form.poruka}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Opišite problem sa vozilom ili uslugu koja Vam je potrebna..."
                        className="w-full bg-gray-800 text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-700 focus:outline-none focus:border-red-500 placeholder-gray-600 transition-colors resize-none text-sm sm:text-base"
                        required
                      />
                    </div>

                    {greska && (
                      <p className="text-red-400 text-xs sm:text-sm font-medium">{greska}</p>
                    )}

                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3 sm:py-3.5 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-red-900/30 text-sm sm:text-base"
                    >
                      Pošalji poruku →
                    </button>

                    <p className="text-gray-600 text-xs text-center">
                      Forma šalje poruku putem WhatsApp-a. Možete nas i direktno pozvati.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
