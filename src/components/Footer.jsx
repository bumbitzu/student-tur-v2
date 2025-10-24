import React from 'react';
import { LogoMark } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900 py-12 text-slate-50">
      <div className="mx-auto grid max-w-screen-xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:gap-12 lg:px-8">
        <div className="space-y-4">
          <a href="#hero" className="flex items-center gap-2" aria-label="Student Tur">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <LogoMark />
            </span>
            <span className="font-semibold">Student Tur</span>
          </a>
          <p className="text-sm text-slate-300">Transport specializat pentru elevi și studenți, cu accent pe siguranță, confort și comunicare transparentă.</p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/studenttur" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-indigo-600" aria-label="Facebook">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13 22V12h3l1-4h-4V6c0-1.1.9-2 2-2h2V0h-3a5 5 0 00-5 5v3H7v4h3v10h3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/studenttur" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-indigo-600" aria-label="Instagram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 11.37A3.37 3.37 0 1112.63 8 3.37 3.37 0 0116 11.37z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Linkuri utile</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><a href="#servicii" className="hover:text-white">Servicii</a></li>
            <li><a href="#flota" className="hover:text-white">Flotă</a></li>
            <li><a href="#testimoniale" className="hover:text-white">Testimoniale</a></li>
            <li><a href="#faq" className="hover:text-white">Întrebări frecvente</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Documente</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><a href="#contact" className="hover:text-white">Termeni și condiții</a></li>
            <li><a href="#contact" className="hover:text-white">Politica de confidențialitate</a></li>
            <li><a href="#contact" className="hover:text-white">Licențe transport</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Rămâi conectat</h3>
          <p className="mt-4 text-sm text-slate-300">Înscrie-te pentru a primi oferte speciale și noutăți despre excursii tematice.</p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter" className="sr-only">Email newsletter</label>
            <input id="newsletter" type="email" required className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none" placeholder="emailul tău" />
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Abonare</button>
          </form>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10" />
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:px-8">
        <p>&copy; <span>{year}</span> Student Tur. Toate drepturile rezervate.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#contact" className="hover:text-white">Termeni</a>
          <a href="#contact" className="hover:text-white">Confidențialitate</a>
          <a href="#contact" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
