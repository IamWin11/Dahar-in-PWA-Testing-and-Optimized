import {
  createRestaurantDetailTemplate,
  createRestaurantReviewsTemplate,
} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurantdb-sources';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
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
    
    <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const reviewTemplate = createRestaurantReviewsTemplate(
      restaurant.customerReviews,
    );
    restaurantsContainer.insertAdjacentHTML('beforeend', reviewTemplate);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
