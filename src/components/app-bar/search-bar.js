import '../../styles/app-bar/search-bar.css';

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

  searchButtonClicked = () => {
    this.querySelector('.search-input').classList.toggle('show-search-input');
  }

  render() {
    this.innerHTML = (`
      <div class="search-bar">
        <input class="search-input" type="search" placeholder="search movies..">
        <div class="search-button">
          <i class="bi bi-search"></i>
        </div>
      </div>`);

    this.addEventListener('input', this._inputEvent);

    this.querySelector('.search-button').addEventListener('click', this.searchButtonClicked);
  }
}

customElements.define('search-bar', SearchBar);
