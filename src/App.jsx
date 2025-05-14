import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Works from './components/Works';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import BriefForm from './components/BriefForm';
import ProjectDetails from './components/ProjectDetails';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

// URL base de la API simulada
const MOCK_API_BASE = 'https://mock.apidog.com/m1/907248-889497-default';
const getAllProjectsUrl = () => `${MOCK_API_BASE}/allprojects`;

function App() {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Peticion API
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(getAllProjectsUrl());
        if (!response.ok) throw new Error('Error al cargar proyectos');
        const data = await response.json();
        setAllProjects(data);
      } catch (err) {
        console.error("Error cargando proyectos:", err);
        setError('No se pudieron cargar los proyectos');
      } finally {
        setLoading(false);
      }
    };
    fetchAllProjects();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <main>
        {loading ? (
          <div className="text-center">
            <p>Cargando proyectos...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p>{error}</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Profile />
                <Services />
                <Works allProjects={allProjects} />
                <Contact />
              </>
            } />

            <Route path="/gallery" element={<Gallery allProjects={allProjects} />} />
            <Route path="/brief" element={<BriefForm />} />
            <Route path="/works/:projectId" element={<ProjectDetails allProjects={allProjects} />} />

            <Route path="*" element={
              <>
                <Hero />
                <Profile />
                <Services />
                <Works allProjects={allProjects} />
                <Contact />
              </>
            } />
          </Routes>
        )}
      </main>

      <Footer />
    </Router>
  );
}

export default App;
