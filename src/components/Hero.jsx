import React from 'react';
import { PhoneIcon } from './Icons.jsx';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white">Sari la conținut</a>
      <div className="absolute inset-0">
        <video autoPlay muted loop className="h-full w-full object-cover" title="Autocar modern pe drum">
          <source src="/media/header.mp4" type="video/mp4" />
          Browserul tău nu suportă elementul video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-900/60 to-zinc-900/50" />
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl space-y-6 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Reduceri pentru grupuri mari
          </span>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Facem ca mobilitatea să funcționeze pentru afaceri, oameni și orașe</h1>
          <p className="text-base leading-relaxed text-slate-100 md:text-lg">Excursii, închirieri microbuze și transferuri rapide – punctualitate și confort la fiecare cursă.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <span>Cere ofertă</span>
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:+40712345678" className="inline-flex items-center justify-center rounded-xl border border-white/60 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Sună acum
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="text-sm font-medium text-white/80">Derulează pentru mai multe detalii</span>
      </div>
    </section>
  );
}
