class footerApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="footer_nav">
      <ul>
        <li><a href="#" tabindex="0">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#/favorite" tabindex="0">Favorite</a></li>
      </ul>
    </div>
    <div class="footer_down">
      <p>Copyright &copy; 2024 Pajoo</p>
    </div>`;
  }
}

customElements.define('foot-app', footerApp);
