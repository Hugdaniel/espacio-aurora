import React from 'react';

export default function Gallery() {
  // Arreglo con las 4 fotos principales del salón
  const galleryImages = [
    {
      id: 1,
      src: "galeria-1.jpg",
      alt: "Salón principal preparado para eventos",
      title: "Salón Principal"
    },
    {
      id: 2,
      src: "galeria-2.jpg",
      alt: "Parque y espacios verdes",
      title: "Decoracion y ambientacion"
    },
    {
      id: 3,
      src: "galeria-3.jpg",
      alt: "Ambientación e iluminación LED",
      title: "Fiesta asegurada con iluminación LED"
    },
    {
      id: 4,
      src: "galeria-4.jpg",
      alt: "Plaza de juegos infantil",
      title: "Plaza de Juegos"
    }
  ];

  return (
    <section id="galeria" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Título de la sección */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '0.8rem', fontWeight: '800' }}>
            Conocé Espacio Aurora
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Cada rincón está pensado para brindarte comodidad, elegancia y momentos memorables.
          </p>
        </div>

        {/* Grilla de 4 Fotos */}
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-card">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}