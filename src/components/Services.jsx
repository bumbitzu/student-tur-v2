import React, { useMemo } from 'react';

export default function Services() {
  const cards = useMemo(
    () => [
      {
        title: 'Transport elevi/studenți',
        desc: 'Rute dedicate pentru naveta școlară și universitară, cu orare flexibile și monitorizare în timp real.',
        icon: (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 6V4h10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: 'Excursii tematice',
        desc: 'Organizăm trasee culturale, tabere și excursii de o zi cu ghizi acreditați și suport logistic complet.',
        icon: (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: 'Închirieri microbuze/autocare',
        desc: 'Flotă modernă disponibilă pentru evenimente, conferințe, transport sportiv și proiecte corporate.',
        icon: (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5h14v6H5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 11v8h10v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: 'Transfer aeroport',
        desc: 'Transferuri rapide spre principalele aeroporturi, cu monitorizarea zborurilor și suport 24/7.',
        icon: (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 19h16M4 5h16v6H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 11v8m10-8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
    []
  );

  return (
    <section id="servicii" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Servicii adaptate nevoilor tale</h2>
          <p className="mt-4 text-base text-zinc-600">De la naveta zilnică la excursii tematice, echipa noastră se ocupă de tot ce înseamnă planificare, logistică și siguranță.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="card rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">{c.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{c.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                Află mai mult
                <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
