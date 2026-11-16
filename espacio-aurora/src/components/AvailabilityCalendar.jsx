import React, { useState, useEffect } from 'react';

// Datos iniciales por defecto si es la primera vez que se abre la web
const INITIAL_MONTHS = [
  {
    name: "Noviembre 2026",
    totalDays: 30,
    daysStatus: {
      5: "reserved",
      6: "reserved",
      12: "pending",
      13: "reserved",
      19: "reserved",
      20: "pending",
      27: "reserved"
    }
  },
  {
    name: "Diciembre 2026",
    totalDays: 31,
    daysStatus: {
      4: "reserved",
      5: "reserved",
      11: "pending",
      12: "reserved",
      18: "reserved",
      19: "reserved",
      24: "reserved",
      25: "reserved",
      31: "reserved"
    }
  },
  {
    name: "Enero 2027",
    totalDays: 31,
    daysStatus: {
      1: "reserved",
      8: "pending",
      9: "reserved",
      16: "reserved",
      23: "pending"
    }
  },
  {
    name: "Febrero 2027",
    totalDays: 28,
    daysStatus: {
      6: "reserved",
      13: "pending",
      20: "reserved"
    }
  }
];

export default function AvailabilityCalendar({ selectedDay, onSelectDay }) {
  // Cargamos los datos guardados en localStorage o usamos los iniciales
  const [monthsData, setMonthsData] = useState(() => {
    const saved = localStorage.getItem('espacio_aurora_calendar');
    return saved ? JSON.parse(saved) : INITIAL_MONTHS;
  });

  const [monthIndex, setMonthIndex] = useState(0);
  const [isAdminMode, setIsAdminMode] = useState(false); // Controla si estamos en Modo Dueño

  // Cada vez que cambia monthsData, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('espacio_aurora_calendar', JSON.stringify(monthsData));
  }, [monthsData]);

  const activeMonth = monthsData[monthIndex];
  const daysInMonth = Array.from({ length: activeMonth.totalDays }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    if (monthIndex > 0) setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    if (monthIndex < monthsData.length - 1) setMonthIndex(monthIndex + 1);
  };

  // Función para rotar estados cuando el dueño toca un día
  const toggleDayStatusAdmin = (day) => {
    const currentStatus = activeMonth.daysStatus[day] || "available";
    
    // Ciclo: available -> pending -> reserved -> available
    let nextStatus = "available";
    if (currentStatus === "available") nextStatus = "pending";
    else if (currentStatus === "pending") nextStatus = "reserved";
    else nextStatus = "available";

    // Actualizamos de forma inmutable el estado del mes activo
    const updatedMonths = monthsData.map((month, idx) => {
      if (idx !== monthIndex) return month;
      return {
        ...month,
        daysStatus: {
          ...month.daysStatus,
          [day]: nextStatus
        }
      };
    });

    setMonthsData(updatedMonths);

    // Si ese día estaba seleccionado en el formulario de cliente y el dueño lo ocupó, lo deseleccionamos
    const fullDateText = `${day} de ${activeMonth.name}`;
    if (selectedDay === fullDateText && nextStatus !== "available") {
      onSelectDay('');
    }
  };

  const handleDayClick = (day, status, fullDateText) => {
    if (isAdminMode) {
      toggleDayStatusAdmin(day);
    } else {
      if (status === "available") {
        onSelectDay(fullDateText);
      }
    }
  };

  return (
    <div className={`calendar-container ${isAdminMode ? 'admin-active' : ''}`}>
      
      {/* Barra superior del Modo Dueño */}
      <div className="admin-bar">
        <span className="admin-hint">
          {isAdminMode 
            ? "Modo Dueño activo: Tocá cualquier día para cambiar entre Libre, Señado y Ocupado." 
            : "Vista de Cliente"}
        </span>
        
        <button 
          type="button" 
          onClick={() => setIsAdminMode(!isAdminMode)}
          className={`admin-toggle-btn ${isAdminMode ? 'active' : ''}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          {isAdminMode ? "Salir de Edición" : "Administrar Fechas"}
        </button>
      </div>

      {/* Cabecera con Navegación de Meses */}
      <div className="calendar-header">
        <div className="calendar-nav">
          <button 
            type="button"
            onClick={handlePrevMonth} 
            disabled={monthIndex === 0}
            className="month-nav-btn"
            aria-label="Mes anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <h3 className="calendar-month-title">{activeMonth.name}</h3>

          <button 
            type="button"
            onClick={handleNextMonth} 
            disabled={monthIndex === monthsData.length - 1}
            className="month-nav-btn"
            aria-label="Mes siguiente"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="calendar-legend">
          <span className="legend-item"><span className="dot available"></span> Libre</span>
          <span className="legend-item"><span className="dot pending"></span> Señado</span>
          <span className="legend-item"><span className="dot reserved"></span> Ocupado</span>
        </div>
      </div>

      {/* Días de la Semana */}
      <div className="calendar-weekdays">
        <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span>
      </div>

      {/* Grilla de Días del Mes Activo */}
      <div className="calendar-grid">
        {daysInMonth.map((day) => {
          const status = activeMonth.daysStatus[day] || "available";
          const fullDateText = `${day} de ${activeMonth.name}`;
          const isSelected = !isAdminMode && selectedDay === fullDateText;
          
          return (
            <div 
              key={day} 
              className={`calendar-day ${status} ${isSelected ? 'selected' : ''} ${isAdminMode ? 'admin-editable' : ''}`}
              onClick={() => handleDayClick(day, status, fullDateText)}
            >
              <span className="day-number">{day}</span>
              <span className="day-status-text">
                {isSelected ? "Elegido" : (
                  <>
                    {status === "available" && "Libre"}
                    {status === "pending" && "Señado"}
                    {status === "reserved" && "Ocupado"}
                  </>
                )}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}