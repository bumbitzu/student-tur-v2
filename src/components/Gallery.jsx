import React from 'react';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', alt: 'Peisaj montan', className: '' },
    { src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80', alt: 'Grup de studenți', className: 'lg:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', alt: 'Autocar în stație', className: '' },
    { src: 'https://images.unsplash.com/photo-1529338296731-c4280a44fc47?auto=format&fit=crop&w=600&q=80', alt: 'Student la fereastră', className: '' },
    { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', alt: 'Autocar pe autostradă', className: 'lg:col-span-2' },
    { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', alt: 'Elevi veseli', className: '' },
  ];
  return (
    <section id="galerie" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Galerie din călătoriile noastre</h2>
          <p className="mt-4 text-base text-zinc-600">Momente surprinse în excursiile organizate de Student Tur. Alege-ți următoarea destinație!</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, idx) => (
            <div key={idx} className={"overflow-hidden rounded-2xl " + img.className}>
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
