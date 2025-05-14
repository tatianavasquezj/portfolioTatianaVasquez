import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Works.css';

const categoryEndpoints = {
  'Diseño de marca': 'https://mock.apidog.com/m1/907248-889497-default/allprojects/category?category=DisenoDeMarca',
  'Diseño editorial': 'https://mock.apidog.com/m1/907248-889497-default/allprojects/category?category=DisenoEditorial',
  'Diseño de material publicitario': 'https://mock.apidog.com/m1/907248-889497-default/allprojects/category?category=DisenoDeMaterialPublicitario',
  'Diseño de contenido para redes sociales': 'https://mock.apidog.com/m1/907248-889497-default/allprojects/category?category=DisenoParaRedesSociales',
  'Todos': 'https://mock.apidog.com/m1/907248-889497-default/allprojects'
};

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('Diseño de marca');
  const navigate = useNavigate();

  // API Proyectos según la categoría
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const endpoint = categoryEndpoints[filter];
        const response = await fetch(endpoint);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error al cargar los proyectos', error);
      }
    };

    fetchProjects();
  }, [filter]);

  // Clic a vista de detalle
  const handleViewMoreClick = (projectId) => {
    navigate(`/works/${projectId}`);
  };

  // Redirección a la galería al hacer clic en "Todos"
  const handleAllClick = () => {
    navigate('/gallery');
  };

  return (
    <section id="Works" className="py-5 bg-light">
      <div className="container">
        <h2 className="works-title mb-4 text-center">Mis Trabajos</h2>
        <p className="works-subtitle text-center text-muted mb-4">
          Una selección de proyectos realizados en diferentes áreas del diseño, adaptados a diversas necesidades y objetivos.
        </p>

        {/* Filtro de categorías */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {Object.keys(categoryEndpoints).map(category => (
            <button
              key={category}
              className={`btn btn-outline-dark ${filter === category ? 'active' : ''} filter-btn`}
              onClick={category === 'Todos' ? handleAllClick : () => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Proyectos filtrados */}
        <div className="row justify-content-center g-4">
          {projects.map(project => (
            <div key={project.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="work-card">
                <div className="image-container">
                  <img
                    src={project.image}
                    alt={`Portada de ${project.title}`}
                    className="work-image"
                  />
                  <div className="work-overlay">
                    <div className="overlay-content">
                      <h5 className="overlay-title">{project.title}</h5>
                      <button
                        className="view-more-btn"
                        onClick={() => handleViewMoreClick(project.id)}
                      >
                        Ver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
