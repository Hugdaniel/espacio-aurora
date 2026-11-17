import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Availability from './components/Availability';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <FAQ />
        <Availability />
        <Footer />
        {/* Próximas secciones: Calendar */}
      </main>
    </div>
  );
}

export default App;