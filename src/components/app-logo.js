class AppLogo extends HTMLElement {
  connectedCallback() {
  	this.render();
  }

  render() {
  	this.innerHTML = `<h1>Movie Info</h1>`;
  }
}

customElements.define('app-logo', AppLogo);
