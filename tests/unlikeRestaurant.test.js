/* eslint-disable no-undef */
import FavoriteRestoDaharin from '../src/scripts/data/favorite-resto-daharin';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restourant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoDaharin.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoDaharin.deleteRestaurant(1);
  });

  it('should display unlike widget when the Restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the Restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked Restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDaharin.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked Restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoDaharin.deleteRestaurant(1);

    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDaharin.getAllRestaurants()).toEqual([]);
  });
});
