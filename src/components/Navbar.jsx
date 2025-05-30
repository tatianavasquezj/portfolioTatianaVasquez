import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/gallery') {
      setActiveLink('Trabajos');
    } else if (location.pathname === '/brief') {
      setActiveLink('Brief');
    } else {
      setActiveLink('');
    }
  }, [location.pathname]);

  const scrollToSection = (id) => {
    setActiveLink(id);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = element.offsetTop - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = element.offsetTop - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToGallery = () => {
    setActiveLink('Trabajos');
    navigate('/gallery');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    setIsMobileMenuOpen(false);
  };

  const navigateToBrief = () => {
    setActiveLink('Brief');
    navigate('/brief');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-full-width ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div 
          className="navbar-logo" 
          onClick={() => scrollToSection('Hero')} 
          style={{ cursor: 'pointer' }}
        >
          <img
            src="/assets/logo/tatiana-vasquez-logo.svg"
            alt="Logo"
          />
        </div>

        <div className="navbar-links-wrapper">
          <nav className={`navbar-links-container ${isMobileMenuOpen ? 'active' : ''} d-md-flex`}>
            <ul className="navbar-links mb-0">
              <li><a className={activeLink === 'Hero' ? 'active' : ''} onClick={() => scrollToSection('Hero')}>Inicio</a></li>
              <li><a className={activeLink === 'Profile' ? 'active' : ''} onClick={() => scrollToSection('Profile')}>Perfil</a></li>
              <li><a className={activeLink === 'Services' ? 'active' : ''} onClick={() => scrollToSection('Services')}>Servicios</a></li>
              <li><a className={activeLink === 'Trabajos' ? 'active' : ''} onClick={navigateToGallery}>Trabajos</a></li>
              <li><a className={activeLink === 'Contact' ? 'active' : ''} onClick={() => scrollToSection('Contact')}>Contacto</a></li>
            </ul>
            <div className="navbar-cta mobile-only">
              <a className={`cta-button ${activeLink === 'Brief' ? 'active' : ''}`} onClick={navigateToBrief}>Empieza tu brief</a>
            </div>
          </nav>
        </div>

        <div className="navbar-cta desktop-only">
          <a className={`cta-button ${activeLink === 'Brief' ? 'active' : ''}`} onClick={navigateToBrief}>Empieza tu brief</a>
        </div>

        <div 
          className="hamburger d-md-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-icons">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
