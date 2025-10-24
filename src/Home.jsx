import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Fleet from './components/Fleet.jsx';
import Advantages from './components/Advantages.jsx';
import Testimonials from './components/Testimonials.jsx';
import Gallery from './components/Gallery.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
    return (
        <>
            <Header />
            <main id="main">
                <Hero />
                <About />
                <Services />
                <Fleet />
                <Advantages />
                <Testimonials />
                <Gallery />
                <FAQ />
            </main>
            <CTA />
            <Contact />
            <Footer />
        </>
    );
}