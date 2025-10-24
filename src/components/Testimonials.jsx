import React from 'react';

export default function Testimonials() {
  const items = [
    {
      quote: '“Student Tur ne-a oferit o experiență fără griji pentru excursia din Viena. Organizare impecabilă și șofer extrem de atent.”',
      name: 'Ana M.',
      role: 'Coordonator proiect Erasmus',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    },
    {
      quote: '“Ne bazăm pe ei pentru naveta zilnică a studenților. Sunt punctuali, flexibili și comunică rapid orice schimbare.”',
      name: 'Mihai M.',
      role: 'Administrator campus',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    },
    {
      quote: '“Excursia de iarnă a fost un succes. Microbuzul curat, dotări moderne, iar șoferul a fost parte din echipa noastră.”',
      name: 'Ioana M.',
      role: 'Profesor coordonator',
      img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80',
    },
  ];
  return (
    <section id="testimoniale" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Ce spun partenerii noștri</h2>
          <p className="mt-4 text-base text-zinc-600">Ne mândrim cu recomandările primite de la licee, universități și organizații studențești din toată țara.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <blockquote className="text-sm text-zinc-600">{t.quote}</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img src={t.img} alt="Portret client" className="h-10 w-10 rounded-full object-cover" width={120} height={120} loading="lazy" />
                <div>
                  <span className="text-sm font-semibold text-zinc-900">{t.name}</span>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
