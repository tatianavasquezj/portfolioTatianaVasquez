import React, { useState } from 'react';
import './BriefForm.css';

const BriefForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectObjective: '',
    targetAudience: '',
    estimatedDate: '',
    estimatedBudget: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="BriefForm" className="brief-section">
      <div className="brief-container">
        <h2 className="brief-title">Brief</h2>
        <p className="brief-subtitle">
          Construyamos algo único. Un brief creativo es la clave para definir los detalles esenciales de tu proyecto: qué necesitas, para quién es y qué quieres comunicar. Al completar el brief, trazamos el camino para una solución precisa y adaptada a tu visión. Demos forma a tu concepto.
        </p>
        <form onSubmit={handleSubmit} className="brief-form">
          <div className="form-row">
            <input type="text" name="name" placeholder="Nombres y apellidos" value={formData.name} onChange={handleChange} className="form-input" required />
            <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} className="form-input" required />
            <input type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} className="form-input" required />
          </div>
          <input type="text" name="company" placeholder="Marca o empresa" value={formData.company} onChange={handleChange} className="form-input" required />
          <label className="form-label">Tipo de proyecto:</label>
          <div className="radio-group">
            {['Identidad Visual', 'Material Publicitario', 'Diseño Editorial', 'Redes Sociales'].map((type) => (
              <label key={type} className="radio-option">
                <input type="radio" name="projectType" value={type.toLowerCase()} onChange={handleChange} /> {type}
              </label>
            ))}
          </div>
          <label className="form-label">Objetivo del proyecto:</label>
          <input type="text" name="projectObjective" placeholder="Mejorar la imagen de marca, aumentar conversiones, entre otros..." value={formData.projectObjective} onChange={handleChange} className="form-input" required />
          <label className="form-label">Público objetivo:</label>
          <input type="text" name="targetAudience" placeholder="Edad, intereses y necesidades de tu público objetivo..." value={formData.targetAudience} onChange={handleChange} className="form-input" required />
          <div className="form-row">
            <input type="text" name="estimatedDate" placeholder="Fecha estimada" value={formData.estimatedDate} onChange={handleChange} className="form-input" required />
            <input type="text" name="estimatedBudget" placeholder="Presupuesto estimado" value={formData.estimatedBudget} onChange={handleChange} className="form-input" required />
          </div>
          <div className="submit-container">
            <button type="submit" className="submit-button">Enviar brief</button>
          </div>
        </form>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3 className="popup-title">¡Gracias por enviar el brief!</h3>
              <p className="popup-message">Nos pondremos en contacto contigo en un plazo de 24 a 48 horas.</p>
              <p className="popup-info">Tu información está segura y no será utilizada para otros fines.</p>
              <button onClick={closePopup} className="close-button">Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BriefForm;
