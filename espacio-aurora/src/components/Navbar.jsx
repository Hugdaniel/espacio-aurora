import React, { useState } from 'react';

export default function Navbar() {
  // Estado para abrir/cerrar el menú en celulares
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para cerrar el menú automáticamente al tocar un enlace
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="logo-espacio-aurora.png" 
          alt="Espacio Aurora" 
          className="navbar-logo" 
        />
      </a>

      {/* Navegación para Escritorio */}
      <nav className="navbar-links-desktop">
        <a href="#salon" className="navbar-link">El Salón</a>
        <a href="#galeria" className="navbar-link">Galería</a>
        <a href="#disponibilidad" className="navbar-btn">Consultar Fecha</a>
      </nav>

      {/* Controles visibles solo en Celular */}
      <div className="navbar-mobile-controls">
        <a href="#disponibilidad" className="navbar-btn" onClick={closeMenu}>
          Consultar Fecha
        </a>
        
        <button 
          className="hamburger-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            /* Icono SVG X (Cerrar) */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            /* Icono SVG Hamburguesa (Abrir) */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Menú Desplegable Móvil (se muestra solo si menuOpen es true) */}
      {menuOpen && (
        <nav className="mobile-dropdown">
          <a href="#salon" className="mobile-link" onClick={closeMenu}>El Salón</a>
          <a href="#galeria" className="mobile-link" onClick={closeMenu}>Galería</a>
          <a href="#disponibilidad" className="mobile-link-highlight" onClick={closeMenu}>Ver Disponibilidad</a>
        </nav>
      )}
    </header>
  );
}