import React from 'react';

export default function Hero() {
  return (
    <section id="salon" className="hero-section">
      
      {/* Imagen a ancho completo */}
      <div className="hero-img-container">
        <img 
          src="/hero-imagen.jpg" 
          alt="Interior del Salón Espacio Aurora" 
          className="hero-img"
        />
      </div>

      {/* Textos y Botón debajo */}
      <div className="hero-content">
        <span style={{
          backgroundColor: 'rgba(255, 107, 53, 0.12)',
          color: 'var(--accent-orange)',
          padding: '0.45rem 1.1rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '1.2rem'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Mariano Acosta, Zona Oeste
        </span>
        
        <h1 className="hero-title">
          El lugar perfecto para celebrar tus momentos inolvidables
        </h1>
        
        <p className="hero-desc">
          Salón de eventos equipado con climatización central, parque, ambientación LED y plaza de juegos para tus festejos.
        </p>

        <a 
          href="#disponibilidad"
          style={{
            backgroundColor: 'var(--accent-orange)',
            color: '#FFF',
            padding: '1rem 2.2rem',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            boxShadow: '0 6px 20px rgba(255, 107, 53, 0.35)'
          }}
        >
          Ver Fechas Disponibles
        </a>
      </div>

    </section>
  );
}