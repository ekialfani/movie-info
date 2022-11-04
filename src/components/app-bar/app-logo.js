/* eslint-disable space-before-blocks */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable require-jsdoc */

class AppLogo extends HTMLElement {
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
  	// eslint-disable-next-line no-tabs
  	// eslint-disable-next-line no-tabs
  	this.render();
  }

  render() {
    const newLocal = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      div {
        padding: 20px 8%;
        display: flex;
        align-items: center;
      }
      
      .logo {
        font-family: 'Stick No Bills', sans-serif;
        color: white;
        font-size: 3em;
        font-weight: bold;
        color: #16a34a;
      }
      
      .logo-text {
        font-family: 'Signika Negative', sans-serif;
        margin-left: 5px;
        font-size: 2em;
        color: white;
      }
      
      @media screen and (max-width: 1440px){
        .logo {
          font-size: 2.5em;
        }
      
        .logo-text {
          font-size: 1.5em;
        }
      }
      
      @media screen and (max-width: 992px){
        div {
          margin-left: 8%;
        }
      }
      
      @media screen and (max-width: 768px){
        div {
          margin-left: 0;
        }
      }
      
      @media screen and (max-width: 576px){
        .logo {
          font-size: 2.3em;
        }
      
        .logo-text {
          display: none;
        }
      }
    </style>

      <div>
        <span class="logo">M</span>
        <span class="logo-text">movie info</span>
      </div>
    `;
  	this.shadowDOM.innerHTML = (newLocal);
  }
}

customElements.define('app-logo', AppLogo);
