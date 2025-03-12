import React from 'react';
import '../../App.css';
import './About.css';
import BodySection from '../BodySection';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function About() {
  return (

    <>

    <Navbar />
    <div>
      <h4 className='about'>En Savoir Plus Sur Nous ..</h4>
      <div className="about-container">
        <h1>Présentation d'Agrovera et de ses Activités</h1>
        <p>Agrovera est une association belge dédiée à l’accompagnement des agriculteurs vers une agriculture durable, innovante et respectueuse de l’environnement. Nous mettons en place des outils et des solutions numériques pour améliorer la gestion des exploitations agricoles, optimiser la production tout en préservant la fertilité des sols.</p>
        
        <h3>Nos activités visent à :</h3>
        <div className="activities-container">
          <div className="activity-box">
            <i className="fa fa-handshake"></i> 
            <h6>Accompagner les agriculteurs</h6>
            <p>Nous offrons un soutien personnalisé sur le terrain pour aider les agriculteurs à adopter des pratiques agricoles durables et à maximiser la rentabilité de leurs exploitations.</p>
          </div>

          <div className="activity-box">
            <i className="fa fa-lightbulb"></i> 
            <h6>Promouvoir l'innovation</h6>
            <p>Agrovera encourage l’adoption de technologies et de techniques agricoles modernes qui respectent l’environnement et répondent aux défis du secteur.</p>
          </div>

          <div className="activity-box">
            <i className="fa fa-users"></i>
            <h6>Renforcer la solidarité</h6>
            <p>Nous favorisons la coopération entre agriculteurs, afin de partager des ressources, des connaissances et de construire une communauté agricole forte.</p>
          </div>

          <div className="activity-box">
            <i className="fa fa-chalkboard-teacher"></i>
            <h6>Former et transmettre le savoir</h6>
            <p>Nous proposons des formations pratiques et des ressources pour transmettre les compétences nécessaires aux agriculteurs d’aujourd'hui et de demain.</p>
          </div>
        </div>

        <p>Agrovera promeut un modèle d’agriculture durable en Belgique, combinant innovation et respect de l’environnement. Nous soutenons des pratiques agricoles écoresponsables, préservons la biodiversité, optimisons les ressources naturelles et réduisons l’empreinte carbone, tout en assurant la viabilité des exploitations locales.</p>
      </div>

      <BodySection />

      <section className="historique">
        <h2>Historique de l'Association Agrovera</h2>
        <div className="historique-container">
          <div className="historique-item">
            <h3>2005</h3>
            <p>Agrovera a été fondée avec pour objectif de soutenir les agriculteurs belges dans leurs démarches vers une agriculture durable. Dès le début, l’accent a été mis sur la recherche et l’innovation.</p>
          </div>
          <div className="historique-item">
            <h3>2010</h3>
            <p>Les premières initiatives de formation et de soutien aux agriculteurs ont été lancées. Agrovera a introduit des outils numériques pour la gestion des exploitations agricoles.</p>
          </div>
          <div className="historique-item">
            <h3>2015</h3>
            <p>Avec la montée de l’agriculture durable, Agrovera a élargi ses services pour inclure des solutions pour la préservation de la biodiversité et la gestion responsable des ressources naturelles.</p>
          </div>
          <div className="historique-item">
            <h3>2020</h3>
            <p>Agrovera continue d'évoluer, en mettant en place des solutions encore plus innovantes pour aider les agriculteurs à faire face aux défis climatiques et économiques actuels.</p>
          </div>
        </div>
      </section>

      <div className="partners-container">
        <h3>Nos partenaires</h3>
        <div className="image-container">
          <img src="./images/img33.png" alt="Partners" />
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}