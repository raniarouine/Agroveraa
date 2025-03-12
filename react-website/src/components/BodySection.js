import React from "react";
import "./BodySection.css";

const BodySection = () => {
  const imageSrc = `${process.env.PUBLIC_URL}/images/img25.jpg`;

  return (
    <section className="body-section">
      <div className="body-content">
        <div className="image-container">
          <img src={imageSrc} alt="Agriculture" />
        </div>
        <div className="text-container">
          <h3>Valeurs</h3>
          <p>Responsabilité, Solidarité, Innovation, Héritage et Transmission de savoir.</p>
          
          <div className="mission-vision">
            <div className="mission">
              <h3>Mission</h3>
              <p>
              Agrovera accompagne les agriculteurs belges en offrant des outils numériques pour améliorer la gestion de leurs exploitations, préserver la fertilité des sols et optimiser la production agricole, tout en favorisant l’innovation et la coopération.
              </p>
            </div>
            <div className="vision">
              <h3>Vision</h3>
              <p>
              Faire de la Belgique un modèle d’agriculture durable, bénéfique de l’environnement et innovante, capable de sustenter les générations futures tout en soutenant les petits exploitants.
              </p>
            </div>
          </div>

          <h3>Présidente</h3>
          <p>Clara Lemoine</p>
        </div>
      </div>
    </section>
  );
};

export default BodySection;
