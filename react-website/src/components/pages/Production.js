import React, { useEffect } from 'react';
import Carousel from '../Carousel';
import Footer from '../Footer';
import './Production.css';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles
import Navbar from '../Navbar';

function Production() {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([20, 0], 2); // Initial map view (latitude, longitude, zoom level)

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define project locations with latitude, longitude, and FontAwesome icon
    const locations = [
      // Tunisia
      { name: 'Sousse, Tunisia', lat: 35.8250, lon: 10.6369, icon: 'fas fa-map-marker-alt' },
      { name: 'Mahdia, Tunisia', lat: 35.5103, lon: 11.0626, icon: 'fas fa-map-marker-alt' },
      { name: 'Tozeur, Tunisia', lat: 33.9176, lon: 8.1299, icon: 'fas fa-map-marker-alt' },
      { name: 'Gabès, Tunisia', lat: 33.8816, lon: 10.0989, icon: 'fas fa-map-marker-alt' },

      // Algeria
      { name: 'Algiers, Algeria', lat: 36.737232, lon: 3.086472, icon: 'fas fa-map-marker-alt' },
      { name: 'Oran, Algeria', lat: 35.6915, lon: -0.6336, icon: 'fas fa-map-marker-alt' },
      { name: 'Constantine, Algeria', lat: 36.3655, lon: 6.6145, icon: 'fas fa-map-marker-alt' },
      { name: 'Annaba, Algeria', lat: 36.8687, lon: 7.7561, icon: 'fas fa-map-marker-alt' },


      
      // Belgium
      { name: 'Brussels, Belgium', lat: 50.8503, lon: 4.3517, icon: 'fas fa-building' },// Localisation de l'association
      { name: 'Antwerp, Belgium', lat: 51.2194, lon: 4.4025, icon: 'fas fa-map-marker-alt' },
      { name: 'Ghent, Belgium', lat: 51.0543, lon: 3.7174, icon: 'fas fa-map-marker-alt' },
      { name: 'Liège, Belgium', lat: 50.6402, lon: 5.5797, icon: 'fas fa-map-marker-alt' },
      { name: 'Charleroi, Belgium', lat: 50.4114, lon: 4.4447, icon: 'fas fa-map-marker-alt' }, // Charleroi
      { name: 'Namur, Belgium', lat: 50.468, lon: 4.8704, icon: 'fas fa-map-marker-alt' }, // Namur
      { name: 'Leuven, Belgium', lat: 50.8795, lon: 4.7005, icon: 'fas fa-map-marker-alt' }, // Leuven
      { name: 'Bruges, Belgium', lat: 51.2093, lon: 3.2247, icon: 'fas fa-map-marker-alt' }, // Bruges
      { name: 'Mons, Belgium', lat: 50.4542, lon: 3.9501, icon: 'fas fa-map-marker-alt' }, // Mons
      { name: 'Kortrijk, Belgium', lat: 50.8267, lon: 3.2594, icon: 'fas fa-map-marker-alt' }, // Kortrijk
      { name: 'Oostende, Belgium', lat: 51.2334, lon: 2.929, icon: 'fas fa-map-marker-alt' }, // Oostende

      // Malta
      { name: 'Valletta, Malta', lat: 35.8997, lon: 14.5147, icon: 'fas fa-map-marker-alt' },

      // South Korea
      { name: 'Seoul, South Korea', lat: 37.5665, lon: 126.9780, icon: 'fas fa-map-marker-alt' },
      { name: 'Busan, South Korea', lat: 35.1796, lon: 129.0756, icon: 'fas fa-map-marker-alt' },

      // Italy
      { name: 'Italy', lat: 41.8719, lon: 12.5674, icon: 'fas fa-map-marker-alt' },

      // Germany
      { name: 'Germany', lat: 51.1657, lon: 10.4515, icon: 'fas fa-map-marker-alt' },

      // Lebanon
      { name: 'Lebanon', lat: 33.8547, lon: 35.8623, icon: 'fas fa-map-marker-alt' },

      // China
      { name: 'China', lat: 35.8617, lon: 104.1954, icon: 'fas fa-map-marker-alt' },

      // Thailand
      { name: 'Thailand', lat: 15.8700, lon: 100.9925, icon: 'fas fa-map-marker-alt' },

      // Turkey
      { name: 'Turkey', lat: 38.9637, lon: 35.2433, icon: 'fas fa-map-marker-alt' },

      // America
      { name: 'São Paulo, Brazil', lat: -23.5505, lon: -46.6333, icon: 'fas fa-map-marker-alt' }, // Added Brazil
      { name: 'Buenos Aires, Argentina', lat: -34.6037, lon: -58.3816, icon: 'fas fa-map-marker-alt' }, // Added Argentina
      { name: 'New York City, USA', lat: 40.7128, lon: -74.0060, icon: 'fas fa-map-marker-alt' }, // Added United States

      // Canada
      { name: 'Ottawa, Canada', lat: 45.4215, lon: -75.6992, icon: 'fas fa-map-marker-alt' }, // Added Canada

      // Spain 
      { name: 'Parque Retiro, Madrid', lat: 40.4154, lon: -3.6840, icon: 'fas fa-map-marker-alt' }, // Added Parque Retiro
      { name: 'Parc Guell, Barcelona', lat: 41.4145, lon: 2.1527, icon: 'fas fa-map-marker-alt' }, // Added Parc Guell

      { name: 'Oslo, Norway', lat: 59.9139, lon: 10.7522, icon: 'fas fa-map-marker-alt' }, // Norway

      { name: 'St. Petersburg, Russia', lat: 59.9343, lon: 30.3351, icon: 'fas fa-map-marker-alt' }, // Russia
      { name: 'Lisbon, Portugal', lat: 38.7223, lon: -9.1393, icon: 'fas fa-map-marker-alt' }, // Portugal
      { name: 'Athens, Greece', lat: 37.9838, lon: 23.7275, icon: 'fas fa-map-marker-alt' }, // Greece
      { name: 'Copenhagen, Denmark', lat: 55.6761, lon: 12.5683, icon: 'fas fa-map-marker-alt' }, // Denmark
      { name: 'Vienna, Austria', lat: 48.2082, lon: 16.3738, icon: 'fas fa-map-marker-alt' }, // Austria
      { name: 'Dublin, Ireland', lat: 53.3498, lon: -6.2603, icon: 'fas fa-map-marker-alt' }, // Ireland
      { name: 'Tallinn, Estonia', lat: 59.437, lon: 24.7535, icon: 'fas fa-map-marker-alt' }, // Estonia
      { name: 'Helsinki, Finland', lat: 60.1699, lon: 24.9384, icon: 'fas fa-map-marker-alt' }, // Finland
      { name: 'Geneva, Switzerland', lat: 46.2044, lon: 6.1432, icon: 'fas fa-map-marker-alt' }, // Switzerland
      { name: 'Bordeaux, France', lat: 44.8378, lon: -0.5792, icon: 'fas fa-map-marker-alt' }, // France
      // Morocco
      { name: 'Rabat, Morocco', lat: 34.020882, lon: -6.841650, icon: 'fas fa-map-marker-alt' },
      // Egypt
      { name: 'Cairo, Egypt', lat: 30.0444, lon: 31.2357, icon: 'fas fa-map-marker-alt' },
      // Ghana
      { name: 'Accra, Ghana', lat: 5.6037, lon: -0.1870, icon: 'fas fa-map-marker-alt' },
      // Kenya
      { name: 'Nairobi, Kenya', lat: -1.286389, lon: 36.817223, icon: 'fas fa-map-marker-alt' },
      // Nigeria
      { name: 'Abuja, Nigeria', lat: 9.05785, lon: 7.49508, icon: 'fas fa-map-marker-alt' },
      // Ethiopia
      { name: 'Addis Ababa, Ethiopia', lat: 9.03, lon: 38.74, icon: 'fas fa-map-marker-alt' },
      // South Africa
      { name: 'Cape Town, South Africa', lat: -33.9249, lon: 18.4241, icon: 'fas fa-map-marker-alt' },
      // Senegal
      { name: 'Dakar, Senegal', lat: 14.6928, lon: -17.4467, icon: 'fas fa-map-marker-alt' },
      // Ivory Coast
      { name: 'Abidjan, Ivory Coast', lat: 5.3453, lon: -4.0244, icon: 'fas fa-map-marker-alt' },
      // Nigeria
      { name: 'Lagos, Nigeria', lat: 6.5244, lon: 3.3792, icon: 'fas fa-map-marker-alt' },
      // Rwanda
      { name: 'Kigali, Rwanda', lat: -1.9706, lon: 30.1044, icon: 'fas fa-map-marker-alt' },
      // Tanzania
      { name: 'Dar es Salaam, Tanzania', lat: -6.7924, lon: 39.2083, icon: 'fas fa-map-marker-alt' },
      // Zambia
      { name: 'Lusaka, Zambia', lat: -15.3875, lon: 28.3228, icon: 'fas fa-map-marker-alt' },
      // Uganda
      { name: 'Kampala, Uganda', lat: 0.3136, lon: 32.5811, icon: 'fas fa-map-marker-alt' },
      // Botswana
      { name: 'Gaborone, Botswana', lat: -24.6282, lon: 25.9231, icon: 'fas fa-map-marker-alt' },
      // Zimbabwe
      { name: 'Harare, Zimbabwe', lat: -17.8292, lon: 31.0522, icon: 'fas fa-map-marker-alt' },
      // Malawi
      { name: 'Lilongwe, Malawi', lat: -13.9783, lon: 33.7741, icon: 'fas fa-map-marker-alt' },
      // Somalia
      { name: 'Mogadishu, Somalia', lat: 2.0469, lon: 45.3182, icon: 'fas fa-map-marker-alt' },
      // India
      { name: 'New Delhi, India', lat: 28.6139, lon: 77.2090, icon: 'fas fa-map-marker-alt' },
      // United Kingdom
      { name: 'London, United Kingdom', lat: 51.5074, lon: -0.1278, icon: 'fas fa-map-marker-alt' },
      // United States
      { name: 'New York, USA', lat: 40.7128, lon: -74.0060, icon: 'fas fa-map-marker-alt' },
      // Brazil
      { name: 'São Paulo, Brazil', lat: -23.5505, lon: -46.6333, icon: 'fas fa-map-marker-alt' },
      
    ];

// Add markers for each location using FontAwesome icons
locations.forEach(location => {
  const customIcon = L.divIcon({
    className: 'leaflet-fa-icon',
    html: `<i class="${location.icon}" style="color:#f39c12; font-size: 24px;"></i>`, // Style the FontAwesome icon
  });

  L.marker([location.lat, location.lon], { icon: customIcon })
    .addTo(map)
    .bindPopup(`<b>${location.name}</b>`)
    .openPopup();
});
}, []);

return (
  <>
    <Navbar />
    <Carousel />
    <div className="production-container">
      <section className="intro">
        <h2 className="intro-title">Nos Produits et Parcelles : Découvrez notre Processus de Production</h2>
        <p>
          Agrovera s'engage à promouvoir et valoriser les produits agricoles de haute qualité cultivés de manière durable. Nous intégrons des sources d'énergie verte telles que l'énergie solaire et des technologies de pointe comme l'irrigation goutte-à-goutte pour minimiser les coûts de production et offrir une expérience agricole satisfaisante.
        </p>
      </section>

      <section className="section-title">
        <h2 className="products-title">Nos Produits</h2>
        <div className="product-categories">
          <div className="category" onMouseEnter={() => document.getElementById('fruits-veg').style.display = 'block'} onMouseLeave={() => document.getElementById('fruits-veg').style.display = 'none'}>
            <h3>Fruits & Légumes</h3>
            <div id="fruits-veg" className="products-list">
              <p>Tomates, Carottes, Pommes de terre, Laitue, Pommes, Pêches, Concombres</p>
            </div>
          </div>
          <div className="category" onMouseEnter={() => document.getElementById('meat').style.display = 'block'} onMouseLeave={() => document.getElementById('meat').style.display = 'none'}>
            <h3>Viandes</h3>
            <div id="meat" className="products-list">
              <p>Viande de boeuf, Poulet, Agneau, Porc</p>
            </div>
          </div>
          <div className="category" onMouseEnter={() => document.getElementById('dairy').style.display = 'block'} onMouseLeave={() => document.getElementById('dairy').style.display = 'none'}>
            <h3>Produits Laitiers</h3>
            <div id="dairy" className="products-list">
              <p>Lait, Fromage, Beurre, Yaourt</p>
            </div>
          </div>
          <div className="category" onMouseEnter={() => document.getElementById('cereals').style.display = 'block'} onMouseLeave={() => document.getElementById('cereals').style.display = 'none'}>
            <h3>Céréales</h3>
            <div id="cereals" className="products-list">
              <p>Blé, Riz, Maïs, Orge, Avoine</p>
            </div>
          </div>
          <div className="category" onMouseEnter={() => document.getElementById('tea-coffee').style.display = 'block'} onMouseLeave={() => document.getElementById('tea-coffee').style.display = 'none'}>
            <h3>Thé & Café</h3>
            <div id="tea-coffee" className="products-list">
              <p>Thé vert, Thé noir, Grains de café</p>
            </div>
          </div>
          <div className="category" onMouseEnter={() => document.getElementById('honey').style.display = 'block'} onMouseLeave={() => document.getElementById('honey').style.display = 'none'}>
            <h3>Miel</h3>
            <div id="honey" className="products-list">
              <p>Miel brut, Miel Manuka</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-title">
        <h2 className="location-title">Nos Parcelles et Notre Localisation</h2>
        <div id="map" style={{ width: '100%', height: '500px', borderRadius: '12px' }}></div>
      </section>
    </div>
    <Footer />
  </>
);
}

export default Production;