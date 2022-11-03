import '../../styles/app-bar/app-logo.css';

class AppLogo extends HTMLElement {
  connectedCallback() {
  	this.render();
  }

  render() {
  	this.innerHTML = (`
      <div>
        <span class="logo">M</span>
        <span class="logo-text">movie info</span>
      </div>
    `);
  }
}

customElements.define('app-logo', AppLogo);
