import FavoriteRestoDaharin from '../data/favorite-resto-daharin';
import {
  createRestoLikeButtonTemplate,
  createRestoLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestoDaharin.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createRestoLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await FavoriteRestoDaharin.putRestaurant(this._restaurant);
        this._renderButton();
      });
    }
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createRestoLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await FavoriteRestoDaharin.deleteRestaurant(this._restaurant.id);
        this._renderButton();
      });
    }
  },
};

export default LikeButtonInitiator;
