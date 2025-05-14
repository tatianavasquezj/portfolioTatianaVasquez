import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('Contact');
    if (element) {
      const offset = element.offsetTop - 80; // Ajuste para navbar fija
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="Hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-line">Imagina,</span>
              <span className="hero-title-line italic">crea,</span>
              <span className="hero-title-line last-line">transforma</span>
            </h1>
            <p className="hero-subtitle">Estrategia, diseño y creatividad alineados con tu marca.</p>
            <div className="button-container">
              <button className="hero-button" onClick={scrollToContact}>
                Conectemos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
