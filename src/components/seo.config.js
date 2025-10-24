const seo = {
  title: 'Student Tur - Transport sigur și accesibil pentru elevi și studenți',
  description: 'Student Tur oferă transport sigur și rapid pentru elevi și studenți: excursii, închirieri microbuze și transferuri. Cere acum o ofertă personalizată!',
  url: 'https://student-tur.ro',
  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Student Tur',
    url: 'https://student-tur.ro',
    logo: 'https://student-tur.ro/logo.svg',
    description: 'Servicii de transport și excursii pentru elevi și studenți.',
    telephone: '+40 712 345 678',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Str. Educației 12',
      addressLocality: 'Cluj-Napoca',
      addressRegion: 'Cluj',
      postalCode: '400000',
      addressCountry: 'RO'
    },
    sameAs: [
      'https://www.facebook.com/studenttur',
      'https://www.instagram.com/studenttur'
    ]
  }
};

export default seo;
