import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-section">
          <p>Encuéntrame en mis redes sociales:</p>
          <div className="social-icons">
            <a 
              href="https://www.behance.net/tatianavasquezj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-circle"
            >
              <img 
                src="/assets/logo/logo-behance.svg" 
                alt="Behance" 
                className="social-icon"
              />
            </a>
            <a 
              href="https://ec.linkedin.com/in/tatianavasquezj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-circle"
            >
              <img 
                src="/assets/logo/logo-linkedin.svg" 
                alt="LinkedIn" 
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="credit-section">
          <p className="footer-credit">2025 © Tatiana Vásquez - Diseñadora Gráfica</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
