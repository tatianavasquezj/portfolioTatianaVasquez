import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

const categoryEndpoints = {
  all: 'https://mock.apidog.com/m1/907248-889497-default/allprojects',
  DiseñoDeMarca: 'https://mock.apidog.com/m1/907248-889497-default/allprojects/category?category=DisenoDeMarca',
  DiseñoEditorial: 'https://mock.apidog.com/m1/907248-889497-default/allprojects/category?category=DisenoEditorial',
  DiseñoDeMaterialPublicitario: 'https://mock.apidog.com/m1/907248-889497-default/allprojects/category?category=DisenoDeMaterialPublicitario',
  DiseñoParaRedesSociales: 'https://mock.apidog.com/m1/907248-889497-default/allprojects/category?category=DisenoParaRedesSociales',
};

const Gallery = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Cargar proyectos según la categoría seleccionada
  const fetchProjects = async (category) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(categoryEndpoints[category]);
      if (!response.ok) throw new Error('Error al cargar los proyectos');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar proyectos al montar el componente y cuando cambie la categoría
  useEffect(() => {
    fetchProjects(selectedCategory);
  }, [selectedCategory]);

  const handleViewMoreClick = (projectId) => {
    navigate(`/works/${projectId}`);
  };

  const categories = Object.keys(categoryEndpoints);

  return (
    <section id="Gallery" className="py-5 bg-light">
      <div className="container">
        <h2 className="gallery-title mt-4 mb-4 text-center">Mis trabajos</h2>
        <p className="gallery-subtitle text-center text-muted mb-4">
          Una selección de proyectos realizados en diferentes áreas del diseño, adaptados a diversas necesidades y objetivos.
        </p>

        {/* Filtro de categorías */}
        <div className="text-center mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'Todos' : category.replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center loading-text">Cargando proyectos...</p>
        ) : error ? (
          <p className="text-center error-text">{`Error: ${error}`}</p>
        ) : projects.length === 0 ? (
          <p className="text-center no-projects">No hay proyectos disponibles en esta categoría.</p>
        ) : (
          <div className="row justify-content-center g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="work-card">
                  <div className="image-container">
                    <img
                      src={`/${project.image}`}
                      alt={`Portada de ${project.title}`}
                      className="work-image"
                    />
                    <div className="work-overlay">
                      <div className="overlay-content">
                        <h5 className="overlay-title">{project.title}</h5>
                        <p className="overlay-desc">{project.description}</p>
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
        )}
      </div>
    </section>
  );
};

export default Gallery;
