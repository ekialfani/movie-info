class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set inputEvent(event) {
    this._inputEvent = event;
    this.render();
  }

  get inputValue() {
    return this.querySelector('.search-input').value;
  }

  render() {
    this.innerHTML = (`
      <div class="search-bar">
        <input class="search-input" type="search" placeholder="search movies..">
      </div>`);

    this.addEventListener('input', this._inputEvent);
  }
}

customElements.define('search-bar', SearchBar);
