import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Availability from './components/Availability';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Availability />
        {/* Próximas secciones: Calendar */}
      </main>
    </div>
  );
}

export default App;