import FavoriteRestoDaharin from '../../data/favorite-resto-daharin';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `<section class="home">
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

            <div class="content">
              <h2 class="content_heading">Cabang Favorit Kamu</h1>
              <div class="restaurants" id="restaurants"></div>
            </div>
            `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoDaharin.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p>Favoritmu tidak ada nih.</p>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
          += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
