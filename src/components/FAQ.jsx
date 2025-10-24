import React, { useState } from 'react';

function FAQItem({ id, question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-zinc-900"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          {question}
          <svg className={'h-5 w-5 flex-shrink-0 text-indigo-600 transition-transform ' + (open ? 'rotate-45' : '')} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div id={id} className={(open ? 'max-h-96' : 'max-h-0') + ' overflow-hidden px-6 transition-all'} role="region" aria-hidden={!open}>
        <p className="pb-4 text-sm text-zinc-600">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const items = [
    {
      q: 'Cum pot solicita o ofertă personalizată?',
      a: 'Completezi formularul din secțiunea Contact sau ne suni direct. Un consultant îți răspunde în cel mult o zi lucrătoare cu o ofertă adaptată grupului tău.',
    },
    {
      q: 'Ce tipuri de vehicule aveți disponibile?',
      a: 'Flota cuprinde vanuri premium, microbuze de 19 locuri, autocare de 50 și 60 de locuri, toate dotate cu aer condiționat și sisteme de siguranță moderne.',
    },
    {
      q: 'Oferiți reduceri pentru grupuri sau colaborări pe termen lung?',
      a: 'Da, avem reduceri progresive în funcție de numărul de curse și oferim contracte avantajoase pentru parteneriate pe tot anul școlar.',
    },
    {
      q: 'Cum asigurați siguranța pasagerilor?',
      a: 'Echipăm fiecare vehicul cu centuri pe toate locurile, sistem GPS și monitorizare, iar șoferii trec prin teste medicale și psihologice periodice.',
    },
    {
      q: 'Ce se întâmplă dacă zborul este întârziat?',
      a: 'Monitorizăm în timp real statusul zborului și ajustăm ora de preluare. Nu percepem taxe suplimentare pentru întârzieri anunțate din timp.',
    },
    {
      q: 'Ce documente sunt necesare pentru excursii în străinătate?',
      a: 'Ne ocupăm de checklist și coordonăm avizele. Ai nevoie doar de actele de identitate, acordurile părinților și, unde este cazul, asigurări medicale.',
    },
  ];

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Întrebări frecvente</h2>
          <p className="mt-4 text-base text-zinc-600">Am adunat cele mai comune întrebări pentru a-ți oferi claritate înainte de rezervare.</p>
        </div>
        <div className="mt-12 space-y-4">
          {items.map((it, i) => (
            <FAQItem key={i} id={`faq-${i + 1}`} question={it.q} answer={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
