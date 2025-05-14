import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Diseño de Marca",
      description: "Creación de identidad visual completa: logotipo, paleta de colores, tipografía y aplicaciones coherentes en todos los medios."
    },
    {
      title: "Diseño Editorial",
      description: "Diseño de publicaciones impresas y digitales: libros, revistas, folletos y catálogos con jerarquía visual clara."
    },
    {
      title: "Material Publicitario",
      description: "Piezas gráficas impactantes para campañas: banners, vallas publicitarias, flyers y anuncios impresos/digitales."
    },
    {
      title: "Contenido para Redes",
      description: "Diseño de contenido visual coherente para redes sociales: posts, stories, banners y plantillas reutilizables."
    }
  ];

  return (
    <section id="Services" className="services-section">
      <div className="container">
        <h2 className="section-title">Servicios</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;