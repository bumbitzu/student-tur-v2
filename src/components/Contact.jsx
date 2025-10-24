import React, { useState } from 'react';
import { PhoneIcon } from './Icons.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({ nume: '', email: '', telefon: '', serviciu: '', data: '', mesaj: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const validate = () => {
    const e = {};
    if (!formData.nume.trim()) e.nume = 'Te rugăm să completezi numele.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Introduce un email valid.';
    if (!/^\+?4?0?7\d{8}$/.test(formData.telefon)) e.telefon = 'Introduce un număr de telefon valid.';
    if (!formData.serviciu) e.serviciu = 'Selectează tipul serviciului.';
    if (!formData.data) e.data = 'Alege o dată.';
    if (!formData.mesaj.trim()) e.mesaj = 'Spune-ne câteva detalii.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!validate()) {
      setStatus({ type: 'error', message: 'Verifică câmpurile marcate și încearcă din nou.' });
      return;
    }
    setStatus({ type: 'success', message: 'Mulțumim! Cererea ta a fost trimisă. Te contactăm în cel mai scurt timp.' });
    setFormData({ nume: '', email: '', telefon: '', serviciu: '', data: '', mesaj: '' });
  };

  const set = (k) => (e) => setFormData((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Contact & Rezervări</h2>
            <p className="mt-4 text-base text-zinc-600">Răspundem rapid – de obicei în aceeași zi lucrătoare.</p>
            <form className="mt-8 space-y-6" noValidate onSubmit={onSubmit}>
              <div>
                <label htmlFor="nume" className="block text-sm font-medium text-zinc-700">Nume complet</label>
                <input id="nume" name="nume" type="text" required className="mt-2 block w-full rounded-xl border-zinc-200 text-base focus:border-indigo-500 focus:ring-indigo-500" placeholder="Nume și prenume" value={formData.nume} onChange={set('nume')} />
                {errors.nume && <p className="mt-1 text-sm text-red-600">{errors.nume}</p>}
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
                  <input id="email" name="email" type="email" required className="mt-2 block w-full rounded-xl border-zinc-200 text-base focus:border-indigo-500 focus:ring-indigo-500" placeholder="exemplu@email.com" value={formData.email} onChange={set('email')} />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-zinc-700">Telefon</label>
                  <input id="telefon" name="telefon" type="tel" required pattern="^\+?4?0?7\d{8}$" className="mt-2 block w-full rounded-xl border-zinc-200 text-base focus:border-indigo-500 focus:ring-indigo-500" placeholder="07xxxxxxxx" value={formData.telefon} onChange={set('telefon')} />
                  {errors.telefon && <p className="mt-1 text-sm text-red-600">{errors.telefon}</p>}
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="serviciu" className="block text-sm font-medium text-zinc-700">Tip serviciu</label>
                  <select id="serviciu" name="serviciu" required className="mt-2 block w-full rounded-xl border-zinc-200 text-base focus:border-indigo-500 focus:ring-indigo-500" value={formData.serviciu} onChange={set('serviciu')}>
                    <option value="" disabled>Selectează o opțiune</option>
                    <option value="naveta">Transport elevi/studenți</option>
                    <option value="excursie">Excursie</option>
                    <option value="inchiriere">Închiriere microbuz/autocar</option>
                    <option value="transfer">Transfer aeroport</option>
                  </select>
                  {errors.serviciu && <p className="mt-1 text-sm text-red-600">{errors.serviciu}</p>}
                </div>
                <div>
                  <label htmlFor="data" className="block text-sm font-medium text-zinc-700">Dată aproximativă</label>
                  <input id="data" name="data" type="date" required className="mt-2 block w-full rounded-xl border-zinc-200 text-base focus:border-indigo-500 focus:ring-indigo-500" value={formData.data} onChange={set('data')} />
                  {errors.data && <p className="mt-1 text-sm text-red-600">{errors.data}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="mesaj" className="block text-sm font-medium text-zinc-700">Mesaj</label>
                <textarea id="mesaj" name="mesaj" rows={4} required className="mt-2 block w-full rounded-xl border-zinc-200 text-base focus:border-indigo-500 focus:ring-indigo-500" placeholder="Detalii despre grup și călătorie" value={formData.mesaj} onChange={set('mesaj')} />
                {errors.mesaj && <p className="mt-1 text-sm text-red-600">{errors.mesaj}</p>}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto">Trimite solicitarea</button>
                <a href="https://wa.me/40712345678" className="inline-flex items-center rounded-xl border border-indigo-200 px-5 py-3 text-base font-semibold text-indigo-700 transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2a10 10 0 00-8.94 14.5L2 22l5.7-1.86A10 10 0 1012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.8 9.4a5.5 5.5 0 007.8 7.8l-1.8-2.4-1.1.4a4.1 4.1 0 01-4.5-4.5l.4-1.1-2.4-1.8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Scrie pe WhatsApp
                </a>
              </div>
              {status.message && (
                <div className={(status.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-red-200 bg-red-50 text-red-700') + ' mt-2 rounded-2xl border px-4 py-3 text-sm'}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold">Date de contact</h3>
              <ul className="mt-4 space-y-4 text-sm text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <PhoneIcon />
                  </span>
                  <div>
                    <p className="font-medium text-zinc-900">Telefon</p>
                    <a href="tel:+40712345678" className="text-indigo-600 hover:text-indigo-700">+40 712 345 678</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-zinc-900">Email</p>
                    <a href="mailto:contact@student-tur.ro" className="text-indigo-600 hover:text-indigo-700">contact@student-tur.ro</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-zinc-900">Adresă</p>
                    <p>Str. Educației 12, Cluj-Napoca</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-zinc-900">Program</p>
                    <p>Luni - Vineri: 08:00 - 18:00<br />Sâmbătă: 10:00 - 14:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <iframe title="Hartă Student Tur" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.228539882728!2d23.59753577695092!3d46.77121014498052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c21b0c4b0f7%3A0x123456789abcdef!2sCluj-Napoca!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
