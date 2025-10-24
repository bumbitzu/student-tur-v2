import React, { useEffect, useState } from 'react';
import { LogoMark } from './Icons.jsx';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onHashClickClose = () => setMobileOpen(false);
    if (mobileOpen) window.addEventListener('hashchange', onHashClickClose);
    return () => window.removeEventListener('hashchange', onHashClickClose);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Principal">
        <a href="#hero" className="flex items-center gap-2" aria-label="Student Tur">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <LogoMark />
          </span>
          <span className="font-semibold text-lg">Student Tur</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 p-2 text-zinc-600 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Deschide meniul</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#despre" className="text-sm font-medium text-zinc-700 transition hover:text-indigo-600">Despre noi</a>
          <a href="#servicii" className="text-sm font-medium text-zinc-700 transition hover:text-indigo-600">Servicii</a>
          <a href="#flota" className="text-sm font-medium text-zinc-700 transition hover:text-indigo-600">Flotă</a>
          <a href="#contact" className="text-sm font-medium text-zinc-700 transition hover:text-indigo-600">Contact</a>
          <a href="#contact" className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cere ofertă</a>
        </div>
      </nav>
      <div id="mobile-menu" className={(mobileOpen ? '' : 'hidden ') + 'md:hidden'} role="dialog" aria-modal="true">
        <div className="px-4 pb-6 pt-2 sm:px-6">
          <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg">
            {[
              { href: '#despre', label: 'Despre noi' },
              { href: '#servicii', label: 'Servicii' },
              { href: '#flota', label: 'Flotă' },
              { href: '#faq', label: 'Întrebări frecvente' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-indigo-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700" onClick={() => setMobileOpen(false)}>
              Cere ofertă
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
