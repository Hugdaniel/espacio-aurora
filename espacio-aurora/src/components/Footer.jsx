import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Columna 1: Logo e Identidad */}
        <div className="footer-col">
          <img 
            src="/logo-espacio-aurora.png" 
            alt="Espacio Aurora" 
            className="footer-logo" 
          />
          <p className="footer-desc">
            El lugar perfecto en Mariano Acosta para celebrar tus momentos inolvidables con comodidad, parque y la mejor atención.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-col">
          <h4 className="footer-title">Secciones</h4>
          <ul className="footer-links">
            <li><a href="#salon">El Salón</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#faq">Preguntas Frecuentes</a></li>
            <li><a href="#disponibilidad">Disponibilidad</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto y Ubicación */}
        <div className="footer-col">
          <h4 className="footer-title">Contacto</h4>
          <p className="footer-text">
            📍 Mariano Acosta, Zona Oeste, Buenos Aires.
          </p>
          <p className="footer-text">
            💬 Consultas directas por WhatsApp desde nuestra sección de fechas.
          </p>
        </div>

      </div>

      {/* Línea de Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Espacio Aurora. Todos los derechos reservados.</p>
        <p className="footer-credits">Desarrollado a medida por  Visión Design.</p>
      </div>
    </footer>
  );
}