import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './components/footerApp';
import './components/mainApp';

let app;

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 60);
  });

  const menu = document.querySelector('#menu-icon');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
  };

  app = new App({
    button: document.querySelector('#menu-icon'),
    drawer: document.querySelector('#nav-bar'),
    content: document.querySelector('main'),
  });
});

window.addEventListener('hashchange', () => {
  if (app) {
    app.renderPage();
  }
});

window.addEventListener('load', () => {
  if (app) {
    app.renderPage();
    swRegister();
  }
});
