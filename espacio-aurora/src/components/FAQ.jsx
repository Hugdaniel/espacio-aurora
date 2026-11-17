import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "¿Cuál es la capacidad máxima de Espacio Aurora?",
      answer: "El salón cuenta con una capacidad operativa validada de hasta 60 personas, garantizando comodidad y espacio óptimo para todos tus invitados."
    },
    {
      question: "¿Qué servicios e instalaciones incluye el alquiler?",
      answer: "Incluye climatización central, uso del parque y espacios verdes, ambientación con luces LED, plaza de juegos infantil y mobiliario básico del salón."
    },
    {
      question: "¿Cómo se realiza la reserva de una fecha?",
      answer: "Podés navegar por nuestro calendario interactivo en la sección de disponibilidad, elegir un día que esté libre ('Libre') y completar el formulario para enviarnos la consulta directamente por WhatsApp."
    },
    {
      question: "¿Se puede traer servicio de catering o comida externa?",
      answer: "¡Sí, totalmente! Contamos con total flexibilidad para que traigas el servicio de lunch, catering, bebida o mesa dulce que prefieras para tu festejo."
    },
    {
      question: "¿Dónde se encuentra ubicado exactamente el salón?",
      answer: "Espacio Aurora está ubicado en la localidad de Mariano Acosta, Zona Oeste, con fácil acceso y un entorno seguro para disfrutar al aire libre."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '0.8rem', fontWeight: '800' }}>
            Preguntas Frecuentes
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Todo lo que necesitás saber antes de planificar tu evento en Espacio Aurora.
          </p>
        </div>

        <div className="faq-list">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  type="button" 
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className="faq-chevron" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}