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
          width: 40%;
          padding: 30px 0;
          margin-left: 5%;
        }

        form {
          border: none;
          padding: 0;
        }

        input.search-input {
          width: 100%;
          border-radius: 50px;
          border: 2px solid #71717a;
          color: #a1a1aa;
          display: block;
          padding: 12px 4px 12px 40px;
          background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' style='color: %23a1a1aa' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E") no-repeat 15px center;
        }

        input.search-input:focus {
          outline: none;
          border-color: #4ADE80;
        }
        
        @media screen and (max-width: 1440px){
          .search-bar {
            width: 50%;
          }

          input.search-input {
            font-size: 0.9em;
            padding-top: 9px;
            padding-bottom: 9px;
          }
        }
        
        @media screen and (max-width: 992px){
          :host {
            border: none;
            display: flex;
            justify-content: flex-end;
          }

          .search-bar {
            width: 60%;
            margin-right: 8%;
          }
        }
        
        @media screen and (max-width: 768px){
          .search-bar {
            width: 60%;
          }
        }
        
        @media screen and (max-width: 576px){
          .search-bar {
            width: 100%;
            margin: 0;
            padding: 0;
          }
        
          input.search-input {
            padding: 7px 4px 7px 35px;
            font-size: 0.8em;
            background-size: 12px;
            background-position: 12px;
          }
        }
      </style>

      <div class="search-bar">
        <form>
          <input class="search-input" type="text" placeholder="Search...">
        </form>
      </div>`);

    this.addEventListener('input', this._inputEvent);
  }
}

customElements.define('search-bar', SearchBar);
