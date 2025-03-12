import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Faites un pas vers l'avenir de l'agriculture !</h1>
      <p>Agrovera est un réseau visionnaire dédié à la transformation de l'agriculture pour un avenir durable. Nous réunissons des individus et des communautés passionnés, partageant des connaissances précieuses, des expériences concrètes et des compétences de pointe pour préserver nos sols et nos écosystèmes naturels. En mettant l'accent sur la durabilité et la résilience, nous ne nous contentons pas de sécuriser les ressources pour aujourd'hui, mais nous assurons leur disponibilité pour les générations futures. Rejoignez-nous dans la lutte contre le changement climatique alors que nous innovons avec des pratiques agricoles durables et créons une communauté agricole prospère et soucieuse de l'environnement. <br/>Découvrez comment Agrovera fait la différence – ensemble, cultivons un avenir meilleur.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img24.jpg'
              text="Explorez comment l'énergie verte transforme l'agriculture grâce à l'énergie solaire et éolienne"
              label='Energie Verte'
              path='/production'
            />
            <CardItem
              src='images/img4.jpg'
              text="Découvrez les oliveraies et goûtez à la pureté de notre huile d'olive biologique"
              label="Huile d'Or"
              path='/production'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img28.jpg'
              text="Découvrez comment la gestion de l'eau stimule la production agricole pour un avenir durable"
              label='Croissance'
              path='/production'
            />
            <CardItem
              src='images/img19.jpg'
              text='Améliorez vos compétences et vos connaissances en participant à nos formation agricole'
              label='Autonomisation des jeunes'
              path='/membership'
            />
            <CardItem
              src='images/img25.jpg'
              text="Faites partie d'une communauté qui transforme l'agriculture avec savoir, soutien et durabilité"
              label='Rejoignez notre communauté'
              path='/membership'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;