import React from 'react';

export default function Features() {
  // Lista de características del salón con sus propios SVGs profesionales
  const featuresList = [
    {
      title: "Climatización Central",
      description: "Aire acondicionado frío/calor para que tus invitados estén cómodos en cualquier época del año.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19 12H2"></path>
        </svg>
      )
    },
    {
      title: "Plaza de Juegos",
      description: "Espacio seguro y entretenido especialmente diseñado para los más chicos.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
      )
    },
    {
      title: "Ambientación LED",
      description: "Iluminación moderna y versátil para darle el clima ideal a tu fiesta o celebración.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
        </svg>
      )
    },
    {
      title: "Capacidad y Confort",
      description: "Instalaciones amplias, cómodas y preparadas para todo tipo de eventos familiares y sociales.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Título de la sección */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '0.8rem', fontWeight: '800' }}>
            Todo lo que necesitas para tu evento
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Diseñado pensando en cada detalle para garantizar una experiencia inolvidable en Mariano Acosta.
          </p>
        </div>

        {/* Grilla de características */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          {featuresList.map((item, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '2.2rem 1.8rem',
              borderRadius: '16px',
              border: '1px solid rgba(0,0,0,0.04)',
              transition: 'transform 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
            }}>
              {/* Contenedor del Icono SVG */}
              <div style={{
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                padding: '12px',
                borderRadius: '12px',
                marginBottom: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: '700' }}>
                {item.title}
              </h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}