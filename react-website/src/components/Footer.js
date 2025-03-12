import React, { useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom'; 
import axios from 'axios';  // Import axios

function Footer() {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Input validation
    if (!formData.name) validationErrors.name = "Le nom est requis";
    if (!formData.email) {
      validationErrors.email = "L'adresse e-mail est requise";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Veuillez entrer un email valide";
    }
    if (!formData.message) validationErrors.message = "Le message est requis";

    setErrors(validationErrors);

    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);

      // Send form data to Django API endpoint
      axios
        .post('http://127.0.0.1:8000/contact/', formData)  // Replace with your actual backend URL
        .then((response) => {
          console.log('Contact form submitted successfully:', response.data);
          // Optionally, you can clear the form or show a success message
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        })
        .catch((error) => {
          console.error('There was an error submitting the contact form:', error);
        });
    }
  };

  return (
    <div className='footer-container' id="contact">
      <section className='footer-contact'>
        <p className='footer-contact-heading'>
        Vous avez des idées ou des questions ? Nous sommes là pour vous écouter et vous aider à grandir !</p>
        <p className='footer-contact-text'>
        Vous pouvez nous contacter à tout moment</p>
        <div className='input-areas'>
          <form onSubmit={handleSubmit}> 
            <div className='input-row'>
              <input
                className='footer-input'
                name='name'
                type='text'
                placeholder='Nom'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <input
              className='footer-input-message'
              name='message'
              type='text'
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <br/>
            <Button buttonStyle='btn--outline' type='submit'>CONTACTEZ NOUS</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>Coordonnées</h2>
            <h4>Association Agricole Agrovera</h4>
            <br/>
            <p>Avenue Louise 500</p>
            <p>1050 Bruxelles</p>
            <p>Belgique</p>
            <br/>
            <p>Tél: +3221234567</p>
          </div>
          <div className='footer-link-items'>
            <h2>Découvrir</h2>
            <Link to='/'>Acceuil</Link>
            <Link to='/about'>Présentation</Link>
            <Link to='/production'>Production</Link>
            <Link to='/membership'>Adhésion</Link>
            <a href='#contact'>Contact</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Suivez Nous</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Agrovera
              <img src='/images/img18.png' alt='Logo' className='footer-logo-img' />
            </Link>
          </div>
          <small className='website-rights'>Agrovera © 2025</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
