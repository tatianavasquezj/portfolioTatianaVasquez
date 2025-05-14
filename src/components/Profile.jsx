import React from 'react';
import './Profile.css';

export default function Profile() {
  const scrollToWorks = () => {
    const worksSection = document.getElementById('Works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="Profile" className="profile-section">
      <div className="profile-container">

        {/* Imagen de perfil */}
        <div className="profile-image-container">
          <img 
            src="assets/images/profilephoto.jpg" 
            alt="Tatiana Vásquez"
            className="profile-image"
          />
        </div>

        {/* Intro */}
        <div className="profile-content">
          <p className="heading-greeting">Hola, soy</p>
          <h1 className="profile-intro-heading">
            <span className="profile-name">Tatiana Vásquez J.</span>
          </h1>

          <p className="profile-intro">
            Diseñadora gráfica radicada en Guayaquil, apasionada por la identidad visual y la comunicación estratégica. Mi trabajo combina creatividad, estructura y propósito para transformar ideas en diseños impactantes. Cada proyecto es una oportunidad para fusionar estética y funcionalidad, creando soluciones visuales que conectan y comunican con claridad.
          </p>

          {/* Clientes tags */}
          <div className="profile-clients">
            <p className="client-title">He trabajado para marcas como:</p>
            <div className="client-tags">
              <span className="client-tag">Rio Store</span>
              <span className="client-tag">Prefectura del Guayas</span>
              <span className="client-tag">Tip's</span>
              <span className="client-tag">Natures Garden (Centro América)</span>
              <span className="client-tag">Kendall (Ecuador)</span>
              <span className="client-tag">Gosh Copenhagen (Ecuador)</span>
              <span className="client-tag">Absolute New York (Ecuador)</span>
            </div>
          </div>

          {/* Conocimientos */}
          <div className="knowledge-section mt-4">
            <p className="client-title">Conocimientos</p>
            <div className="table-responsive">
              <table className="table knowledge-table">
                <tbody>
                  <tr>
                    <td>Photoshop</td>
                    <td>Illustrator</td>
                    <td>InDesign</td>
                  </tr>
                  <tr>
                    <td>After Effects</td>
                    <td>Figma</td>
                    <td>Adobe XD</td>
                  </tr>
                  <tr>
                    <td>WordPress</td>
                    <td>HTML</td>
                    <td>JavaScript</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
