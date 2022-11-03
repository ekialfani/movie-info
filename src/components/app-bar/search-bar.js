/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  /**
   * @param {any} event
   */
  set inputEvent(event) {
    this._inputEvent = event;
    this.render();
  }

  get inputValue() {
    return this.shadowDOM.querySelector('.search-input').value;
  }

  searchButtonClicked() {
    this.previousElementSibling.classList.toggle('show-search-input');
    this.classList.toggle('button-active');
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    this.shadowDOM.innerHTML = (`
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          border-left: 1px solid #27272a;
        }
        
        .search-bar {
          width: 45%;
          padding: 30px 0;
          margin-left: 5%;
        }
        
        .search-input {
          display: inline-block;
          width: 100%;
          font-size: 1em;
          padding: 12px 25px;
          border: 2px solid #71717a;
          border-radius: 50px;
          color: #a1a1aa;
          background-color: transparent;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #4ADE80;
          color: #22c55e;
        }
        
        .search-button {
          background-color: #3f3f46;
          padding: 5px 10px;
          border-radius: 50px;
          display: none;
          font-size: 1em;
          position: absolute;
          color: #9ca3af;
          top: 30px;
          right: 5%;
        }
        
        .button-active {
          background-color: #22c55e;
          color: #fafafa;
        }
        
        @media screen and (max-width: 1440px){
          .search-bar {
            border: none;
            width: 50%;
          }
        
          .search-input {
            font-size: 0.9em;
            padding: 10px 20px;
          }
        }
        
        @media screen and (max-width: 992px){
          .search-bar {
            margin-left: 5%;
            padding-bottom: 20px;
          }
        
          .search-input {
            display: none;
          }
        
          .show-search-input {
            display: inline-block;
          }
        
          .search-button {
            display: inline-block;
          }
        }
        
        @media screen and (max-width: 768px){
          .search-bar {
            width: 60%;
          }
        }
        
        @media screen and (max-width: 576px){
          .search-bar {
            width: 65%;
            margin-left: 15px;
            padding: 20px 0 15px;
          }
        
          .search-input {
            padding: 8px 15px;
            font-size: 0.6em;
          }
        
          .search-button {
            padding: 4px 6px;
            font-size: 0.7em;
          }
        }
      </style>

      <div class="search-bar">
        <input class="search-input" type="search" placeholder="search movies..">
        <div class="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
            <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
          </svg>
        </div>
      </div>`);

    this.addEventListener('input', this._inputEvent);

    this.shadowDOM.querySelector('.search-button').addEventListener('click', this.searchButtonClicked);
  }
}

customElements.define('search-bar', SearchBar);
