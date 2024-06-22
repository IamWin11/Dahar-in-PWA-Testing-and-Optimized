/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Favoritmu tidak ada nih.', 'p');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favoritmu tidak ada nih.', 'p');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = (await I.grabTextFrom('.restaurant-item__content h3 a')).trim();
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__content h3 a');
  const likedRestaurant = locate('.restaurant-item__content h3 a').first();
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Favoritmu tidak ada nih.', 'p');
});
