import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image ${restaurant.name}" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>👍<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <section class="section-detail">
  <h1 class="home-page-header">Detail Cabang</h1>
  <div class="restaurant__container">
    <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image ${restaurant.name}" crossorigin="anonymous">
    <div class="restaurant__info">
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <h3>Informasi</h3>
  <h4 class="city">Kota</h4>
  <p>${restaurant.city}</p>
  <h4 class="address">Tempat</h4>
  <p>${restaurant.address}</p>
  <h4 class="rating">Ulasan</h4>
  <p class="stars-rating">👍${restaurant.rating}</p>
</div>
  </div>
  <div class="restaurant__description">
    <h3 class="h3_desc">Deskripsi</h3>
    <p>${restaurant.description}</p>
</div>
<div class="restaurant__menu">
  <h3 class="menu-food">Varian Menu</h3>
  <div class="menu-grid">
    <div class="food-section">
      <h4 class="menu_food">Makanan</h4>
      <p>${restaurant.menus.foods.map((food) => food.name).join('<br>')}</p>
    </div>
    <div class="drink-section">
      <h4 class="menu_drink">Minuman</h4>
      <p>${restaurant.menus.drinks.map((drink) => drink.name).join('<br>')}</p>
    </div>
  </div>
</div>
  <div class="restaurant__reviews"></div> <!-- Container for reviews -->
  </section>
  <h1 class="comment_0">Komentar</h1>
`;

export function createRestaurantReviewsTemplate(reviews) {
  let reviewsHtml = '';
  reviews.forEach((review) => {
    reviewsHtml += `
      <div class="review">
        <p>${review.name}</p>
        <p>${review.review}</p>
      </div>
    `;
  });
  return reviewsHtml;
}

const createRestoLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class='bx bx-like'></i>
  </button>
`;

const createRestoLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class='bx bxs-like' ></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestoLikeButtonTemplate,
  createRestoLikedButtonTemplate,
};
