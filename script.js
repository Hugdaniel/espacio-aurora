import React from 'react';

export default function Navbar() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--bg-primary)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Marca / Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img 
          src="/logo-espacio-aurora.png" 
          alt="Espacio Aurora Logo" 
          style={{ height: '45px', objectFit: 'contain' }} 
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-dark)' }}>
          Espacio Aurora
        </span>
      </div>

      {/* Menú de Navegación */}
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="#salon" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: '500' }}>El Salón</a>
        <a href="#galeria" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: '500' }}>Galería</a>
        <a href="#disponibilidad" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: '500' }}>Disponibilidad</a>
        
        {/* Botón WhatsApp de la barra */}
        <a 
          href="https://wa.me/5491100000000?text=Hola!%20Quiero%20consultar%20disponibilidad"
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'var(--accent-orange)',
            color: '#FFF',
            padding: '0.6rem 1.2rem',
            borderRadius: '20px',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          Consultar
        </a>
      </nav>
    </header>
  );
}

import React from 'react';

export default function Hero() {
  return (
    <section id="salon" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      padding: '4rem 2rem',
      backgroundColor: 'var(--bg-secondary)',
      alignItems: 'center'
    }}>
      {/* Textos y Acción */}
      <div>
        <span style={{
          backgroundColor: 'rgba(255, 107, 53, 0.1)',
          color: 'var(--accent-orange)',
          padding: '0.4rem 1rem',
          borderRadius: '15px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          display: 'inline-block',
          marginBottom: '1rem'
        }}>
          📍 Mariano Acosta, Zona Oeste
        </span>
        
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1rem', color: 'var(--text-dark)' }}>
          El lugar perfecto para celebrar tus momentos inolvidables
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: '1.6' }}>
          Salón de eventos equipado con climatización central, parque, ambientación LED y plaza de juegos para tus festejos.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="#disponibilidad"
            style={{
              backgroundColor: 'var(--accent-orange)',
              color: '#FFF',
              padding: '0.9rem 1.8rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
            }}
          >
            Ver Fechas Disponibles
          </a>
        </div>
      </div>

      {/* Imagen Limpia del Hero */}
      <div style={{ textAlign: 'center' }}>
        <img 
          src="/hero-image.jpg" 
          alt="Interior del Salón Espacio Aurora" 
          style={{
            width: '100%',
            maxHeight: '420px',
            objectFit: 'cover',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </section>
  );
}

