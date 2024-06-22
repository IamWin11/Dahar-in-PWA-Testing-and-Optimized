(()=>{"use strict";var n,A={249:(n,A,e)=>{e.d(A,{A:()=>E});var t=e(354),r=e.n(t),a=e(314),o=e.n(a),i=e(417),p=e.n(i),C=new URL(e(800),e.b),B=new URL(e(560),e.b),l=new URL(e(196),e.b),d=o()(r()),s=p()(C),g=p()(B),m=p()(l);d.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  border: none;\n  outline: none;\n  scroll-behavior: smooth;\n  font-family: "Lato", sans-serif;\n}\n:focus {\n  outline: 2px solid var(--text-color);\n  outline-offset: 2px;\n  border-radius: 10px;\n}\n:root {\n  --text-color: #fff;\n  --bg--color: #1a1a1a;\n  --main-color: #76b331;\n\n  --h1-font: 6rem;\n  --h2-font: 3rem;\n  --p-font: 1rem;\n}\nhtml {\n  color: var(--text-color);\n  background: var(--bg--color);\n  height: 100%;\n}\nheader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1000;\n  width: 100%;\n  background: transparent;\n  padding: 27px 17%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all .50s ease;\n}\nheader.sticky {\n  padding: 8px 17%;\n  background: transparent;\n  backdrop-filter: blur(35px);\n}\n.logo {\n  font-size: 33px;\n  color: var(--text-color);\n  font-weight: 700;\n  padding: 20px;\n}\nspan {\n  color: var(--main-color);\n}\n.navbar {\n  display: flex;\n}\n.navbar a {\n  padding: 20px;\n  color: var(--text-color);\n  font-size: var(--p-font);\n  font-weight: 500;\n  margin: 15px 22px;\n  transition: all .50 ease;\n}\n.navbar a:hover {\n  color: var(--main-color);\n}\n#menu-icon {\n  color: var(--main-color);\n  background-color: transparent;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 10001;\n  display: none;\n  min-width: 44px; \n  min-height: 44px; \n  padding: 7px;\n  position: absolute; /* Posisi tombol menu hamburger dengan tepat */\n  right: 17px;\n  top: 20px;\n}\nsection {\n  padding: 70px 17% 60px;\n}\n.home {\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  background-image: linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${s});\n  background-size: cover;\n  background-position: bottom center;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n@media screen and (min-width: 768px) {\n  .home {\n    background-image: linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${g});\n  }\n}\n@media screen and (min-width: 1200px) {\n  .home {\n    background-image: linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${m});\n  }\n}\n.home-text h5 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  letter-spacing: 6px;\n  color: var(--main-color);\n}\n.home-text h1 {\n  font-size: var(--h1-font);\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 20px;\n}\n.home-text p {\n  font-size: var(--p-font);\n  font-weight: 500;\n  line-height: 30px;\n  color: #ffffffab;\n  margin-bottom: 35px;\n}\n.btn {\n  display: inline-block;\n  padding: 13px 40px;\n  background: var(--main-color);\n  color: var(--bg--color);\n  font-size: 15px;\n  font-weight: 600;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  transition: all .50 ease;\n  cursor: pointer;\n}\n.btn:hover {\n  border: 2px solid var(--text-color);\n  background: transparent;\n  color: var(--text-color);\n}\n.btn:focus {\n  outline: none;\n}\n.about {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  gap: 9rem;\n}\n.about_img img{\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n}\n.about_text h5 {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--main-color);\n  text-transform: uppercase;\n  letter-spacing: 6px;\n  margin-bottom: 20px;\n}\n.about_text h2 {\n  font-size: var(--h2-font);\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 25px;\n}\n.about_text p {\n  font-size: var(--p-font);\n  font-weight: 500;\n  line-height: 30px;\n  color: #ffffffab;\n  margin-bottom: 35px;\n}\n.text_center {\n  text-align: center;\n}\n.text_center h2 {\n  font-size: var(--h2-font);\n  font-weight: 800;\n}\n.footer_nav {\n  margin: 30px 0;\n}\n.footer_nav ul {\n  display: flex;\n  justify-content: center;\n}\n.footer_nav ul li a{\n  color: var(--main-color);\n  margin: 20px;\n  text-decoration: none;\n  font-size: 1.3rem;\n  opacity: 0.7;\n  transition: 0.5s;\n  padding: 10px;\n}\n.footer_nav ul li a:hover {\n  opacity: 1;\n}\n.footer_down {\n  background-color: var(--bg--color);\n  padding: 20px;\n  text-align: center;\n}\n.footer_down p {\n  color: var(--text-color);\n}\n.skip-link {\n  position: absolute;\n  top: -100px;\n  left: 0;\n  background-color: var(--main-color);\n  color: white;\n  padding: 20px;\n  z-index: 100;\n}\n.skip-link:focus {\n  top: 0;\n}\n.content {\n  padding: 3rem;\n  margin: 0 auto;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.content .content__heading {\n  font-weight: normal;\n  text-align: center;\n}\n.home-page-header {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  margin: 32px 0;\n  text-align: center;\n}\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.restaurant-item__header {\n  position: relative;\n  overflow: hidden;  \n  height: 200px;  \n}\n.restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n  height: 100%; \n  object-fit: cover;\n}\n.restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 0;\n  right: 0;\n  display: inline-block;\n  background-color: #6c6565;\n  color: white;\n  border-radius: 1rem 0 0;\n}\n.restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n.restaurant-item__content {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n  display: block;\n  text-decoration: none;\n  padding: 0;\n  color: var(--main-color);\n  font-size: 1.5em;\n}\n.restaurant-item__content h3 a {\n  display: inline-block;\n  color: var(--main-color);\n  text-decoration: none;\n  display: inline-block;\n  padding: 10px 20px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  color: #fff;\n  margin: 0;\n}\n.restaurant {\n  grid-template-columns: 1fr;\n  display: grid;\n  gap: 18px 16px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.restaurant .restaurant__title,\n.restaurant .restaurant__overview {\n  grid-column: 1 / -1;\n}\n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 1rem;\n}\n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n.restaurant__container {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.restaurant__poster {\n  width: 100%;\n  max-width: 200px;\n  height: auto;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n.restaurant__info {\n  flex: 1;\n  width: 100%;\n  padding: 16px;\n  background-color: #333;\n  color: #fff;\n  border-radius: 8px;\n}\n.restaurant__info h2 {\n  margin: 0 0 10px 0;\n  font-size: 1.8em;\n  color: var(--main-color);\n}\n.restaurant__info h3 {\n  margin: 20px 0 10px 0;\n  font-size: 1.5em;\n  border-bottom: 1px solid #444;\n  padding-bottom: 5px;\n}\n.restaurant__info h4 {\n  margin: 15px 0 5px 0;\n  font-size: 1.2em;\n  display: flex;\n  align-items: center;\n}\n.restaurant__info p {\n  margin: 0 0 10px 0;\n  font-size: 1em;\n}\n.stars-rating {\n  color: #ffc800;\n}\n.restaurant__name {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.restaurant__description {\n  padding: 16px;\n  margin-bottom: 20px;\n  background-color: #333; /* Latar belakang gelap */\n  color: #fff; /* Teks putih */\n  border-radius: 8px; /* Sudut membulat */\n}\n.restaurant__menu {\n  margin: 20px;\n  padding: 16px;\n  margin-bottom: 20px;\n  background-color: #333; /* Latar belakang gelap */\n  color: #fff; /* Teks putih */\n  border-radius: 8px; /* Sudut membulat */\n}\n.menu-food {\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--main-color);\n}\n.menu_food,\n.menu_drink {\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.menu-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.menu-grid h4 {\n  display: flex;\n  align-items: center;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nul p {\n  margin: 0;\n}\n.comment_0 {\n  padding: 1rem;\n  text-align: center;\n}\n.review {\n  background-color: grey;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 10px;\n  margin: 20px;\n  color: var(--bg--color);\n}\n.review p {\n  margin: 5px 0;\n}\n.restaurant__reviews {\n  margin-top: 20px;\n}\n.search-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0;\n}\n#search-input {\n  box-sizing: border-box;\n  width: calc(100% - 44px);\n  height: 44px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px 0 0 4px;\n  font-size: 14px;\n  outline: none;\n  transition: border 0.3s;\n}\n#search-input:focus {\n  border-color: #00aaff;\n}\n#search-button {\n  box-sizing: border-box;\n  width: 5rem; /* Mengatur lebar menjadi 44px */\n  height: 44px; /* Mengatur tinggi menjadi 44px */\n  padding: 0; /* Menghapus padding */\n  border: none; /* Menghapus border */\n  background-color: var(--main-color);\n  color: white;\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 0 4px 4px 0;\n  transition: background-color 0.3s;\n}\n#search-button:hover {\n  background-color: mediumseagreen;\n} \nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;  \n}\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--main-color);\n\n  position: fixed;\n  bottom: 16px;\n  right: 20px;\n  border-radius: 1rem;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n.menu-grid {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n.food-section,\n.drink-section {\n  flex: 1;\n  margin: 0 10px;\n}\nh3.h3_desc,\nh3.menu-food,\nh4.menu_food,\nh4.menu_drink {\n  margin-bottom: 10px;\n  color: var(--main-color);\n}\np {\n  margin: 5px 0;\n}\n.restaurant__description p {\n  text-align: justify;\n}`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,gBAAgB;EAChB,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,+BAA+B;AACjC;AACA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;;EAErB,eAAe;EACf,eAAe;EACf,cAAc;AAChB;AACA;EACE,wBAAwB;EACxB,4BAA4B;EAC5B,YAAY;AACd;AACA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,wBAAwB;EACxB,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,wBAAwB;EACxB,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;AAC1B;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,wBAAwB;EACxB,6BAA6B;EAC7B,eAAe;EACf,eAAe;EACf,cAAc;EACd,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB,EAAE,8CAA8C;EAClE,WAAW;EACX,SAAS;AACX;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,qHAAwH;EACxH,sBAAsB;EACtB,kCAAkC;EAClC,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE;IACE,qHAAyH;EAC3H;AACF;AACA;EACE;IACE,qHAAwH;EAC1H;AACF;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,wBAAwB;AAC1B;AACA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,6BAA6B;EAC7B,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,6BAA6B;EAC7B,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;AACjB;AACA;EACE,mCAAmC;EACnC,uBAAuB;EACvB,wBAAwB;AAC1B;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,wBAAwB;EACxB,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,UAAU;AACZ;AACA;EACE,kCAAkC;EAClC,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,YAAY;AACd;AACA;EACE,MAAM;AACR;AACA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,0CAA0C;EAC1C,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,qBAAqB;EACrB,yBAAyB;EACzB,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,qBAAqB;EACrB,UAAU;EACV,wBAAwB;EACxB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,qBAAqB;EACrB,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;EAC5B,WAAW;EACX,SAAS;AACX;AACA;EACE,0BAA0B;EAC1B,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;AACA;;EAEE,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,OAAO;EACP,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB,EAAE,yBAAyB;EACjD,WAAW,EAAE,eAAe;EAC5B,kBAAkB,EAAE,mBAAmB;AACzC;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,sBAAsB,EAAE,yBAAyB;EACjD,WAAW,EAAE,eAAe;EAC5B,kBAAkB,EAAE,mBAAmB;AACzC;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;;EAEE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,UAAU;AACZ;AACA;EACE,SAAS;AACX;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,0BAA0B;EAC1B,eAAe;EACf,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,sBAAsB;EACtB,WAAW,EAAE,gCAAgC;EAC7C,YAAY,EAAE,iCAAiC;EAC/C,UAAU,EAAE,sBAAsB;EAClC,YAAY,EAAE,qBAAqB;EACnC,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,eAAe;EACf,0BAA0B;EAC1B,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mCAAmC;;EAEnC,eAAe;EACf,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,SAAS;;EAET,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;AACA;;EAEE,OAAO;EACP,cAAc;AAChB;AACA;;;;EAIE,mBAAmB;EACnB,wBAAwB;AAC1B;AACA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;AACrB",sourcesContent:['* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  border: none;\n  outline: none;\n  scroll-behavior: smooth;\n  font-family: "Lato", sans-serif;\n}\n:focus {\n  outline: 2px solid var(--text-color);\n  outline-offset: 2px;\n  border-radius: 10px;\n}\n:root {\n  --text-color: #fff;\n  --bg--color: #1a1a1a;\n  --main-color: #76b331;\n\n  --h1-font: 6rem;\n  --h2-font: 3rem;\n  --p-font: 1rem;\n}\nhtml {\n  color: var(--text-color);\n  background: var(--bg--color);\n  height: 100%;\n}\nheader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1000;\n  width: 100%;\n  background: transparent;\n  padding: 27px 17%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all .50s ease;\n}\nheader.sticky {\n  padding: 8px 17%;\n  background: transparent;\n  backdrop-filter: blur(35px);\n}\n.logo {\n  font-size: 33px;\n  color: var(--text-color);\n  font-weight: 700;\n  padding: 20px;\n}\nspan {\n  color: var(--main-color);\n}\n.navbar {\n  display: flex;\n}\n.navbar a {\n  padding: 20px;\n  color: var(--text-color);\n  font-size: var(--p-font);\n  font-weight: 500;\n  margin: 15px 22px;\n  transition: all .50 ease;\n}\n.navbar a:hover {\n  color: var(--main-color);\n}\n#menu-icon {\n  color: var(--main-color);\n  background-color: transparent;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 10001;\n  display: none;\n  min-width: 44px; \n  min-height: 44px; \n  padding: 7px;\n  position: absolute; /* Posisi tombol menu hamburger dengan tepat */\n  right: 17px;\n  top: 20px;\n}\nsection {\n  padding: 70px 17% 60px;\n}\n.home {\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  background-image: linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(../public/images/heros/hero-small.jpg);\n  background-size: cover;\n  background-position: bottom center;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n@media screen and (min-width: 768px) {\n  .home {\n    background-image: linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(../public/images/heros/hero-medium.jpg);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .home {\n    background-image: linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(../public/images/heros/hero-large.jpg);\n  }\n}\n.home-text h5 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  letter-spacing: 6px;\n  color: var(--main-color);\n}\n.home-text h1 {\n  font-size: var(--h1-font);\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 20px;\n}\n.home-text p {\n  font-size: var(--p-font);\n  font-weight: 500;\n  line-height: 30px;\n  color: #ffffffab;\n  margin-bottom: 35px;\n}\n.btn {\n  display: inline-block;\n  padding: 13px 40px;\n  background: var(--main-color);\n  color: var(--bg--color);\n  font-size: 15px;\n  font-weight: 600;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  transition: all .50 ease;\n  cursor: pointer;\n}\n.btn:hover {\n  border: 2px solid var(--text-color);\n  background: transparent;\n  color: var(--text-color);\n}\n.btn:focus {\n  outline: none;\n}\n.about {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  gap: 9rem;\n}\n.about_img img{\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n}\n.about_text h5 {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--main-color);\n  text-transform: uppercase;\n  letter-spacing: 6px;\n  margin-bottom: 20px;\n}\n.about_text h2 {\n  font-size: var(--h2-font);\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 25px;\n}\n.about_text p {\n  font-size: var(--p-font);\n  font-weight: 500;\n  line-height: 30px;\n  color: #ffffffab;\n  margin-bottom: 35px;\n}\n.text_center {\n  text-align: center;\n}\n.text_center h2 {\n  font-size: var(--h2-font);\n  font-weight: 800;\n}\n.footer_nav {\n  margin: 30px 0;\n}\n.footer_nav ul {\n  display: flex;\n  justify-content: center;\n}\n.footer_nav ul li a{\n  color: var(--main-color);\n  margin: 20px;\n  text-decoration: none;\n  font-size: 1.3rem;\n  opacity: 0.7;\n  transition: 0.5s;\n  padding: 10px;\n}\n.footer_nav ul li a:hover {\n  opacity: 1;\n}\n.footer_down {\n  background-color: var(--bg--color);\n  padding: 20px;\n  text-align: center;\n}\n.footer_down p {\n  color: var(--text-color);\n}\n.skip-link {\n  position: absolute;\n  top: -100px;\n  left: 0;\n  background-color: var(--main-color);\n  color: white;\n  padding: 20px;\n  z-index: 100;\n}\n.skip-link:focus {\n  top: 0;\n}\n.content {\n  padding: 3rem;\n  margin: 0 auto;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.content .content__heading {\n  font-weight: normal;\n  text-align: center;\n}\n.home-page-header {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  margin: 32px 0;\n  text-align: center;\n}\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.restaurant-item__header {\n  position: relative;\n  overflow: hidden;  \n  height: 200px;  \n}\n.restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n  height: 100%; \n  object-fit: cover;\n}\n.restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 0;\n  right: 0;\n  display: inline-block;\n  background-color: #6c6565;\n  color: white;\n  border-radius: 1rem 0 0;\n}\n.restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n.restaurant-item__content {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n  display: block;\n  text-decoration: none;\n  padding: 0;\n  color: var(--main-color);\n  font-size: 1.5em;\n}\n.restaurant-item__content h3 a {\n  display: inline-block;\n  color: var(--main-color);\n  text-decoration: none;\n  display: inline-block;\n  padding: 10px 20px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  color: #fff;\n  margin: 0;\n}\n.restaurant {\n  grid-template-columns: 1fr;\n  display: grid;\n  gap: 18px 16px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.restaurant .restaurant__title,\n.restaurant .restaurant__overview {\n  grid-column: 1 / -1;\n}\n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 1rem;\n}\n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n.restaurant__container {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.restaurant__poster {\n  width: 100%;\n  max-width: 200px;\n  height: auto;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n.restaurant__info {\n  flex: 1;\n  width: 100%;\n  padding: 16px;\n  background-color: #333;\n  color: #fff;\n  border-radius: 8px;\n}\n.restaurant__info h2 {\n  margin: 0 0 10px 0;\n  font-size: 1.8em;\n  color: var(--main-color);\n}\n.restaurant__info h3 {\n  margin: 20px 0 10px 0;\n  font-size: 1.5em;\n  border-bottom: 1px solid #444;\n  padding-bottom: 5px;\n}\n.restaurant__info h4 {\n  margin: 15px 0 5px 0;\n  font-size: 1.2em;\n  display: flex;\n  align-items: center;\n}\n.restaurant__info p {\n  margin: 0 0 10px 0;\n  font-size: 1em;\n}\n.stars-rating {\n  color: #ffc800;\n}\n.restaurant__name {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.restaurant__description {\n  padding: 16px;\n  margin-bottom: 20px;\n  background-color: #333; /* Latar belakang gelap */\n  color: #fff; /* Teks putih */\n  border-radius: 8px; /* Sudut membulat */\n}\n.restaurant__menu {\n  margin: 20px;\n  padding: 16px;\n  margin-bottom: 20px;\n  background-color: #333; /* Latar belakang gelap */\n  color: #fff; /* Teks putih */\n  border-radius: 8px; /* Sudut membulat */\n}\n.menu-food {\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--main-color);\n}\n.menu_food,\n.menu_drink {\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.menu-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.menu-grid h4 {\n  display: flex;\n  align-items: center;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nul p {\n  margin: 0;\n}\n.comment_0 {\n  padding: 1rem;\n  text-align: center;\n}\n.review {\n  background-color: grey;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 10px;\n  margin: 20px;\n  color: var(--bg--color);\n}\n.review p {\n  margin: 5px 0;\n}\n.restaurant__reviews {\n  margin-top: 20px;\n}\n.search-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0;\n}\n#search-input {\n  box-sizing: border-box;\n  width: calc(100% - 44px);\n  height: 44px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px 0 0 4px;\n  font-size: 14px;\n  outline: none;\n  transition: border 0.3s;\n}\n#search-input:focus {\n  border-color: #00aaff;\n}\n#search-button {\n  box-sizing: border-box;\n  width: 5rem; /* Mengatur lebar menjadi 44px */\n  height: 44px; /* Mengatur tinggi menjadi 44px */\n  padding: 0; /* Menghapus padding */\n  border: none; /* Menghapus border */\n  background-color: var(--main-color);\n  color: white;\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 0 4px 4px 0;\n  transition: background-color 0.3s;\n}\n#search-button:hover {\n  background-color: mediumseagreen;\n} \nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;  \n}\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--main-color);\n\n  position: fixed;\n  bottom: 16px;\n  right: 20px;\n  border-radius: 1rem;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n.menu-grid {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n.food-section,\n.drink-section {\n  flex: 1;\n  margin: 0 10px;\n}\nh3.h3_desc,\nh3.menu-food,\nh4.menu_food,\nh4.menu_drink {\n  margin-bottom: 10px;\n  color: var(--main-color);\n}\np {\n  margin: 5px 0;\n}\n.restaurant__description p {\n  text-align: justify;\n}'],sourceRoot:""}]);const E=d},936:(n,A,e)=>{e.d(A,{A:()=>i});var t=e(354),r=e.n(t),a=e(314),o=e.n(a)()(r());o.push([n.id,"@media (max-width: 1500px) {\n  header {\n    padding: 18px 8%;\n  }\n  header.sticky {\n    padding: 7px 8%;\n  }\n  section {\n    padding: 45px 8% 35px;\n  }\n  :root {\n    --h1--font: 4.6rem;\n    --h2--font: 2.8rem;\n    --p--font: 15px;\n  }\n  .home {\n    height: 100vh;\n  }\n}\n\n@media (max-width: 1050px) {\n  .about {\n    gap: 3rem;\n  }\n  #menu-icon {\n    display: block;\n  }\n  .section-detail {\n    padding: 45px 8% 35px;\n  }\n  .navbar {\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    padding: 40px 60px;\n    top: 0;\n    bottom: 0;\n    left: 100%;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    background: #000;\n    transition: all 0.5 ease;\n  }\n  .navbar a {\n    color: #979797;\n    margin: 0px 0px 40px 0px;\n    font-size: 2.2rem;\n    font-weight: 400;\n    padding: 20px;\n    min-width: 44px;\n    min-height: 44px;\n    display: inline-block;\n  }\n  .navbar.open {\n    left: 0;\n  }\n  .restaurants {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 2rem;\n    margin: 32px 0;\n    text-align: center;\n  }\n}\n\n@media (max-width: 900px) {\n  .about {\n    grid-template-columns: 1fr;\n  }\n  .restaurants {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n    margin: 32px 0;\n    text-align: center;\n  }\n}\n\n@media (max-width: 600px) {\n  :root {\n    --h1--font: 3.5rem;\n    --h2--font: 2.1rem;\n  }\n  .home {\n    height: 85vh;\n  }\n  .restaurants {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 2rem;\n    margin: 32px 0;\n    text-align: center;\n  }\n}\n\n@media (max-width: 450px) {\n  header {\n    padding: 12px 3%;\n    right: 20px;\n  }\n  header.sticky {\n    padding: 7px 3%;\n    right: 20px;\n  }\n  section {\n    padding: 60px 3% 50px;\n  }\n  .restaurants {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 2rem;\n    margin: 32px 0;\n    text-align: center;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .home-text h1 {\n      font-size: 3em;\n      padding-left: 1rem;\n  }\n\n  .home-text h5, .home-text .btn {\n      font-size: 1em;\n  }\n  \n}\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,SAAS;EACX;EACA;IACE,cAAc;EAChB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,UAAU;IACV,QAAQ;IACR,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,wBAAwB;EAC1B;EACA;IACE,cAAc;IACd,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,qBAAqB;EACvB;EACA;IACE,OAAO;EACT;EACA;IACE,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,cAAc;IACd,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,cAAc;IACd,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,YAAY;EACd;EACA;IACE,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,cAAc;IACd,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,WAAW;EACb;EACA;IACE,eAAe;IACf,WAAW;EACb;EACA;IACE,qBAAqB;EACvB;EACA;IACE,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,cAAc;IACd,kBAAkB;EACpB;AACF;;AAEA;EACE;MACI,cAAc;MACd,kBAAkB;EACtB;;EAEA;MACI,cAAc;EAClB;;AAEF",sourcesContent:["@media (max-width: 1500px) {\n  header {\n    padding: 18px 8%;\n  }\n  header.sticky {\n    padding: 7px 8%;\n  }\n  section {\n    padding: 45px 8% 35px;\n  }\n  :root {\n    --h1--font: 4.6rem;\n    --h2--font: 2.8rem;\n    --p--font: 15px;\n  }\n  .home {\n    height: 100vh;\n  }\n}\n\n@media (max-width: 1050px) {\n  .about {\n    gap: 3rem;\n  }\n  #menu-icon {\n    display: block;\n  }\n  .section-detail {\n    padding: 45px 8% 35px;\n  }\n  .navbar {\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    padding: 40px 60px;\n    top: 0;\n    bottom: 0;\n    left: 100%;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    background: #000;\n    transition: all 0.5 ease;\n  }\n  .navbar a {\n    color: #979797;\n    margin: 0px 0px 40px 0px;\n    font-size: 2.2rem;\n    font-weight: 400;\n    padding: 20px;\n    min-width: 44px;\n    min-height: 44px;\n    display: inline-block;\n  }\n  .navbar.open {\n    left: 0;\n  }\n  .restaurants {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 2rem;\n    margin: 32px 0;\n    text-align: center;\n  }\n}\n\n@media (max-width: 900px) {\n  .about {\n    grid-template-columns: 1fr;\n  }\n  .restaurants {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n    margin: 32px 0;\n    text-align: center;\n  }\n}\n\n@media (max-width: 600px) {\n  :root {\n    --h1--font: 3.5rem;\n    --h2--font: 2.1rem;\n  }\n  .home {\n    height: 85vh;\n  }\n  .restaurants {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 2rem;\n    margin: 32px 0;\n    text-align: center;\n  }\n}\n\n@media (max-width: 450px) {\n  header {\n    padding: 12px 3%;\n    right: 20px;\n  }\n  header.sticky {\n    padding: 7px 3%;\n    right: 20px;\n  }\n  section {\n    padding: 60px 3% 50px;\n  }\n  .restaurants {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 2rem;\n    margin: 32px 0;\n    text-align: center;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  .home-text h1 {\n      font-size: 3em;\n      padding-left: 1rem;\n  }\n\n  .home-text h5, .home-text .btn {\n      font-size: 1em;\n  }\n  \n}\n"],sourceRoot:""}]);const i=o},810:(n,A,e)=>{var t=e(72),r=e.n(t),a=e(825),o=e.n(a),i=e(659),p=e.n(i),C=e(56),B=e.n(C),l=e(540),d=e.n(l),s=e(113),g=e.n(s),m=e(249),E={};E.styleTagTransform=g(),E.setAttributes=B(),E.insert=p().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=d(),r()(m.A,E),m.A&&m.A.locals&&m.A.locals},47:(n,A,e)=>{var t=e(72),r=e.n(t),a=e(825),o=e.n(a),i=e(659),p=e.n(i),C=e(56),B=e.n(C),l=e(540),d=e.n(l),s=e(113),g=e.n(s),m=e(936),E={};E.styleTagTransform=g(),E.setAttributes=B(),E.insert=p().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=d(),r()(m.A,E),m.A&&m.A.locals&&m.A.locals}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={id:n,exports:{}};return A[n].call(a.exports,a,a.exports,t),a.exports}t.m=A,n=[],t.O=(A,e,r,a)=>{if(!e){var o=1/0;for(B=0;B<n.length;B++){for(var[e,r,a]=n[B],i=!0,p=0;p<e.length;p++)(!1&a||o>=a)&&Object.keys(t.O).every((n=>t.O[n](e[p])))?e.splice(p--,1):(i=!1,a<o&&(o=a));if(i){n.splice(B--,1);var C=r();void 0!==C&&(A=C)}}return A}a=a||0;for(var B=n.length;B>0&&n[B-1][2]>a;B--)n[B]=n[B-1];n[B]=[e,r,a]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var A=t.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");if(e.length)for(var r=e.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=e[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{t.b=document.baseURI||self.location.href;var n={580:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var r,a,[o,i,p]=e,C=0;if(o.some((A=>0!==n[A]))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(p)var B=p(t)}for(A&&A(e);C<o.length;C++)a=o[C],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(B)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var r=t.O(void 0,[109,608,465,71,74,720],(()=>t(956)));r=t.O(r)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map