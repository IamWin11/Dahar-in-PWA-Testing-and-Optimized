import Swal from 'sweetalert2';
import API_ENDPOINT from '../../globals/api-endpoint';
import RestaurantApiSource from '../../data/restaurantdb-sources';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="home">
      <div class="home-text">
        <h5>Ayo</h5>
        <h1>Dahar-in <br> App</h1>
        <h5>Haus? Laper?<br> Daharin aja sekarang</h5>
        <button class="btn">Lanjut lah</button>
      </div>
    </section>

    <section class="about">
      <div class="about_img">
      <picture>
        <source media="(max-width: 300px)" srcset="./images/heros/about-image-small.jpg">
        <img src="./images/heros/about-image.jpg" alt="#">
      </picture>
      </div>
      </div>

      <div class="about_text">
        <h5>Dahar-in</h5>
        <h2>Kamu Harus Tau..</h2>
        <p>Di Dahar-in, kami percaya bahwa makanan adalah lebih dari sekadar kebutuhan dasar—ini adalah seni, 
          tradisi, dan pengalaman yang menyatukan kita. Terletak di jantung kota, 
          restoran kami hadir untuk menyajikan hidangan yang tidak hanya memanjakan lidah, 
          tetapi juga membawa kenangan dan kebahagiaan.</p>
          <button class="btn">Yuk Lihat</button>
      </div>
    </section>
    
    <div class="content" id="list-content">
        <h2 class="home-page-header">Ini Cabang Cabangnya</h2>
      <!-- Search Bar -->
      <div class="search-container">
        <input type="text" id="search-input" placeholder="Yuk cari cabangnya...">
        <button id="search-button">Cari</button>
    </div>
      <!-- Restaurant Container -->
      <div class="restaurants" id="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.getElementById('restaurants');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    const displayRestaurants = (restaurants) => {
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant-item');
        restaurantItem.innerHTML = createRestaurantItemTemplate(restaurant);
        restaurantsContainer.appendChild(restaurantItem);
      });
    };

    const searchRestaurants = async (query) => {
      try {
        const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
        const data = await response.json();
        displayRestaurants(data.restaurants);
      } catch (error) {
        console.error('Error saat mencari resto', error);
      }
    };

    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        searchRestaurants(query);
      } else {
        Swal.fire('Cari yang bener');
      }
    });

    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          searchRestaurants(query);
        } else {
          Swal.fire('Cari yang bener');
        }
      }
    });

    const initialRestaurants = await RestaurantApiSource.getListOfRestaurants();
    displayRestaurants(initialRestaurants);
  },
};

export default Home;
