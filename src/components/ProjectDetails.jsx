import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProjects, setAllProjects] = useState([]);

  const MOCK_API_BASE = 'https://mock.apidog.com/m1/907248-889497-default';
  const getProjectUrl = (id) => `${MOCK_API_BASE}/allprojects/${id}`;
  const getAllProjectsUrl = () => `${MOCK_API_BASE}/allprojects`;

  const getLocalImagePath = (imageName) => {
    if (!imageName) return '/assets/images/placeholder.jpg';
    const cleanedName = imageName.replace(/^\/?assets\/images\//, '');
    return `/assets/images/${cleanedName}`;
  };

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await fetch(getAllProjectsUrl());
        if (!response.ok) throw new Error('Error al cargar proyectos');
        const data = await response.json();
        setAllProjects(data);
      } catch (err) {
        console.error("Error cargando lista de proyectos:", err);
      }
    };
    fetchAllProjects();
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(getProjectUrl(projectId));
        if (!response.ok) throw new Error(`Proyecto ${projectId} no encontrado`);

        const data = await response.json();

        const processedProject = {
          ...data,
          image: getLocalImagePath(data.image || data.cover),
          additionalImages: (data.additionalImages || []).map(getLocalImagePath)
        };

        setProject(processedProject);
      } catch (err) {
        console.error("Error cargando proyecto:", err);
        setError(err.message);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  const navigateToProject = (direction) => {
    const currentIndex = allProjects.findIndex(p => p.id === parseInt(projectId));
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + allProjects.length) % allProjects.length
      : (currentIndex + 1) % allProjects.length;
    navigate(`/works/${allProjects[newIndex].id}`);
  };

  return (
    <div className="project-details-container">
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p className="loading-text">Cargando proyecto...</p>
        </div>
      ) : error || !project ? (
        <div className="text-center">
          <h2 className="error-title">Error</h2>
          <p className="error-text">{error || 'El proyecto no existe'}</p>
          <button onClick={() => navigate('/')} className="back-button">
            Volver a proyectos
          </button>
        </div>
      ) : (
        <div className="project-content">
          <div className="project-carousel">
            <Carousel interval={null}>
              {project.image && (
                <Carousel.Item>
                  <img
                    className="d-block w-100 project-image"
                    src={project.image}
                    alt={`Portada de ${project.title || project.titulo}`}
                  />
                </Carousel.Item>
              )}
              {project.additionalImages?.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 project-image"
                    src={img}
                    alt={`Imagen ${index + 1} de ${project.title || project.titulo}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="project-info">
            <div className="project-header">
              <h1>{project.title || project.titulo}</h1>
              <span className="project-category">
                {project.category || project.genero}
              </span>
              {project.client && (
                <p className="project-client">
                  <strong>Cliente:</strong> {project.client}
                </p>
              )}
            </div>
            <div className="project-description">
              <p>{project.description || project.sinopsis}</p>
            </div>
            <div className="project-navigation">
              <Button variant="outline-dark" onClick={() => navigateToProject('prev')}>
                &lt; Anterior
              </Button>
              <Button variant="outline-dark" onClick={() => navigateToProject('next')}>
                Siguiente &gt;
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
