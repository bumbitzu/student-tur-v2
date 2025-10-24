import React from 'react';

export default function About() {
  return (
    <section id="despre" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">Experiență din 2008</span>
            <h2 className="text-2xl font-semibold md:text-3xl">Despre Student Tur</h2>
            <p className="text-base leading-relaxed text-zinc-600">Suntem partenerul de încredere pentru școli, universități și organizații studențești care caută transport sigur, confortabil și punctual. Ne adaptăm fiecărui grup și livrăm servicii impecabile în toată țara.</p>
            <ul className="space-y-3">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  text: 'Licențe de transport actualizate și audit de siguranță periodic.',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  text: 'Disponibilitate rapidă și coordonare dedicată pentru fiecare cursă.',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 12l9 4 9-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  text: 'Acoperire națională și parteneriate pentru trasee internaționale.',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  text: 'Asigurări complete pentru pasageri și bagaje.',
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    {item.icon}
                  </span>
                  <p className="text-sm md:text-base text-zinc-600">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" alt="Studenți pregătiți de excursie" className="h-full w-full object-cover" width="1200" height="900" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
