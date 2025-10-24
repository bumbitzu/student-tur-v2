import React from 'react';

export default function Fleet() {
  const items = [
    {
      img: 'https://images.unsplash.com/photo-1529429617124-aee79a067cbd?auto=format&fit=crop&w=800&q=80',
      title: 'Microbuz 19 locuri',
      features: ['Aer condiționat dublu circuit', 'USB & Wi-Fi la fiecare rând', 'Spațiu bagaje 3m³'],
    },
    {
      img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
      title: 'Autocar 50 locuri',
      features: ['Scaune ergonomice reclinabile', 'Sistem multimedia & microfon', 'Toaletă la bord'],
    },
    {
      img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
      title: 'Van premium 8 locuri',
      features: ['Scaune din piele și climatizare zonală', 'Portbagaj extins pentru bagaje voluminoase', 'Prize 220V și USB'],
    },
    {
      img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
      title: 'Autocar turistic 60 locuri',
      features: ['Iluminare ambientală și sistem video', 'Frigider și dozator apă', 'Asistență tehnică 24/7'],
    },
  ];
  return (
    <section id="flota" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Flotă modernă și versatilă</h2>
            <p className="mt-4 max-w-2xl text-base text-zinc-600">Vehicule întreținute riguros, dotate cu aer condiționat, Wi-Fi și sisteme de siguranță avansate. Pe mobil poți derula orizontal pentru a vedea toate opțiunile.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Solicită ofertă flotă</a>
        </div>
        <div className="mt-10 overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin' }} role="list">
          <div className="flex snap-x snap-mandatory gap-6 md:grid md:grid-cols-3 md:gap-8">
            {items.map((it) => (
              <article key={it.title} className="min-w-[260px] snap-start rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <img src={it.img} alt={it.title} className="h-44 w-full rounded-xl object-cover" width={800} height={600} loading="lazy" />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <ul className="space-y-1 text-sm text-zinc-600">
                    {it.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
