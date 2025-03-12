import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import CountUp from 'react-countup'; // Import CountUp for counters
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faUsers, faSeedling, faBox, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import '../../App.css';
import Footer from '../Footer';
import './Membership.css';
import Form from '../Form';
import { useInView } from 'react-intersection-observer'; // Import useInView
import Navbar from '../Navbar';

export default function Membership() {
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,  // Fait en sorte que le compteur démarre seulement une fois
    threshold: 0.5,     // Le compteur commencera à se déclencher quand 50% de l'élément est visible
  });

  return (
    <>

    <Navbar />

    <div className="membership-page">
      <h1 className="membership">Rejoignez Notre Communauté</h1>

      <div className="membership-container">
        <h1 className="membership-title">Pourquoi devenir membre dans Agrovera ?</h1>
        <div className="carousel-membership-container">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            emulateTouch={true} // Add swipe ability for touch devices
            dynamicHeight={false}
          >
            <div>
              <h2>Participer à des projets innovants</h2>
              <p>Rejoindre Agrovera vous permet de participer à des projets agricoles innovants.</p>
            </div>
            <div>
              <h2>Améliorer vos performances et vos compétences</h2>
              <p>Offrez-vous la possibilité de participer à des formations spécialisées pour vous améliorer.</p>
            </div>
            <div>
              <h2>Être informé sur l’actualité de l’agriculture environnementale</h2>
              <p>Accédez à des informations et des nouvelles sur l'agriculture durable et responsable.</p>
            </div>
            <div>
              <h2>Tisser un réseau associatif</h2>
              <p>Connectez-vous avec d'autres membres, échangez des idées et construisez des partenariats.</p>
            </div>
          </Carousel>
        </div>
      </div>

      <Form />

      <div className="counter-container" ref={counterRef}>
        <div className="counter-item">
          <FontAwesomeIcon icon={faUsers} size="2x" />
          <h3>Adhérents</h3>
          <span>+</span>
          {inView && <CountUp start={0} end={4570} duration={3} separator="," />}
        </div>

        <div className="counter-item">
          <FontAwesomeIcon icon={faSeedling} size="2x" />
          <h3>Parcelles</h3>
          <span>+</span>
          {inView && <CountUp start={0} end={88} duration={3} separator="," />}
        </div>

        <div className="counter-item">
          <FontAwesomeIcon icon={faBox} size="2x" />
          <h3>Produits</h3>
          <span>+</span>
          {inView && <CountUp start={0} end={165} duration={3} separator="," />}
        </div>

        <div className="counter-item">
          <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
          <h3>Événements</h3>
          <span>+</span>
          {inView && <CountUp start={0} end={211} duration={3} separator="," />}
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}
