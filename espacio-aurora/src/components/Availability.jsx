import React, { useState } from 'react';
import AvailabilityCalendar from './AvailabilityCalendar';

export default function Availability() {
  const [selectedDate, setSelectedDate] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const MAX_CAPACITY = 60; // Capacidad máxima permitida en Espacio Aurora

  const [formData, setFormData] = useState({
    eventType: 'Cumpleaños',
    guests: '',
    name: ''
  });

  const handleSelectDay = (formattedDate) => {
    setSelectedDate(formattedDate);
    setErrorMsg('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Convertimos a número para comparar la capacidad
  const guestCount = parseInt(formData.guests) || 0;
  const isOverCapacity = guestCount > MAX_CAPACITY;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      setErrorMsg('Por favor, tocá un día "Libre" en el calendario de arriba para continuar.');
      return;
    }

    if (isOverCapacity) {
      setErrorMsg(`La cantidad de invitados supera la capacidad máxima del salón (${MAX_CAPACITY} personas).`);
      return;
    }

    const phoneAdmin = "5491100000000"; // Reemplazá con el número real
    const message = `¡Hola! Me interesa consultar disponibilidad para Espacio Aurora.%0A%0A* Nombre: ${formData.name}%0A* Fecha elegida: ${selectedDate}%0A* Tipo de evento: ${formData.eventType}%0A* Invitados: ${guestCount} personas`;
    
    window.open(`https://wa.me/${phoneAdmin}?text=${message}`, '_blank');
  };

  return (
    <section id="disponibilidad" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '0.8rem', fontWeight: '800' }}>
            Disponibilidad y Consultas
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Tocá una fecha libre en el calendario y completá tus datos para enviarnos tu consulta.
          </p>
        </div>

        {/* 1. Calendario */}
        <AvailabilityCalendar 
          selectedDay={selectedDate} 
          onSelectDay={handleSelectDay} 
        />

        {/* 2. Formulario con validación de capacidad */}
        <form onSubmit={handleSubmit} className="availability-form">
          
          <div className={`selected-date-banner ${selectedDate ? 'has-date' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>
              {selectedDate 
                ? <>Fecha seleccionada: <strong>{selectedDate}</strong></> 
                : "Seleccioná un día libre en el calendario de arriba"}
            </span>
          </div>

          {errorMsg && (
            <div className="form-alert error">
              {errorMsg}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Tu Nombre y Apellido</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Ej: Laura Gómez"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="eventType">Tipo de Evento</label>
              <select 
                id="eventType" 
                name="eventType" 
                value={formData.eventType}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Casamiento">Casamiento</option>
                <option value="15 Años">15 Años</option>
                <option value="Bautismo / Comunión">Bautismo / Comunión</option>
                <option value="Corporativo / Otro">Corporativo / Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Cantidad de Invitados (Máx. {MAX_CAPACITY})</label>
              <input 
                type="number" 
                id="guests" 
                name="guests" 
                required
                min="1"
                max="120"
                placeholder="Ej: 50"
                value={formData.guests}
                onChange={handleChange}
                className={`form-input ${isOverCapacity ? 'input-error' : ''}`}
              />
            </div>
          </div>

          {/* Alerta visual en tiempo real si excede la capacidad */}
          {isOverCapacity && (
            <div className="capacity-warning">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>¡Atención! La capacidad máxima de Espacio Aurora es de <strong>{MAX_CAPACITY} personas</strong>. Para más invitados, te sugerimos consultarnos de forma especial.</span>
            </div>
          )}

          <button 
            type="submit" 
            className={`form-submit-btn ${isOverCapacity ? 'btn-disabled' : ''}`}
          >
            {isOverCapacity ? 'Supera la capacidad del salón' : 'Consultar por WhatsApp'}
          </button>
        </form>

      </div>
    </section>
  );
}