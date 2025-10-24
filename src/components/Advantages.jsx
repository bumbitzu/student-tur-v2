import React from 'react';

export default function Advantages() {
  const items = [
    {
      title: 'Punctualitate garantată',
      desc: 'Monitorizăm traseele în timp real și ajustăm itinerariile pentru a evita întârzierile neprevăzute.',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 6v6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Siguranță la standarde europene',
      desc: 'Vehicule dotate cu sisteme ABS, ESP și centuri pe toate locurile, revizii lunare și asigurări complete.',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 21l-8-4V7l8-4 8 4v10l-8 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 10.5a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Preț corect și transparent',
      desc: 'Oferim oferte personalizate, fără costuri ascunse și cu discounturi pentru colaborări recurente.',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3l7 4v8l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Șoferi profesioniști',
      desc: 'Toți șoferii sunt certificați, cunosc limba engleză și au training periodic în comunicare cu tinerii.',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 21a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  return (
    <section id="avantaje" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">De ce să alegi Student Tur</h2>
          <p className="mt-4 text-base text-zinc-600">Investim constant în pregătirea șoferilor și în tehnologie pentru a oferi un transport sigur și plăcut.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">{it.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
