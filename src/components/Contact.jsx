import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-intro">
          ¿Tienes alguna pregunta? Si necesitas más información o tienes dudas,
          estaré encantada de ayudarte.
        </p>

        {isSubmitted ? (
          <div className="success-popup">
            <div className="popup-content">
              <h3 className="success-title">¡Gracias por tu mensaje!</h3>
              <p className="success-text">Revisaré tu consulta y te contactaré pronto.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group compact">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Nombres y apellidos"
                  required
                />
              </div>
              <div className="form-group compact">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Correo Electrónico"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Cuéntame qué necesitas y te responderé pronto."
                required
              ></textarea>
            </div>
            <div className="form-group submit-wrapper">
              <button type="submit" className="submit-button">Enviar</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;