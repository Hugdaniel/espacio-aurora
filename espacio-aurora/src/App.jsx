import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Próximas secciones: Gallery, Calendar */}
      </main>
    </div>
  );
}

export default App;