import React from 'react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-12">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-6 px-4 text-center text-white sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div>
          <p className="text-sm uppercase tracking-wider text-white/70">Gata de drum?</p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Rezervă transportul pentru următoarea excursie</h2>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-base font-semibold text-indigo-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Cere ofertă acum</a>
      </div>
    </section>
  );
}
