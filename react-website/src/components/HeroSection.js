import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video1.mp4' autoPlay loop muted />
      <h1>La Terre appelle</h1>
      <p>Allez-vous l'aider à prospérer ?</p>
      <div className='hero-btns'>
        {/* Déplacer le Button à l'intérieur du Link */}
        <Link to="/membership">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            REJOIGNEZ NOUS
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
