import '../styles/menu-list.css';

class MenuList extends HTMLElement {
  connectedCallback() {
  	this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = (`
	    	<ul>
		    	<li>
		    		<a href="" class="now-playing">now playing</a>
		    	</li>
		    	<li>
		    		<a href="" class="popular">popular</a>
		    	</li>
		    	<li>
		    		<a href="" class="top-rate">top rate</a>
		    	</li>
		    	<li>
		    		<a href="" class="up-coming">up coming</a>
		    	</li>
	    	</ul>`
    	);

    this.addEventListener('click', this._clickEvent);
  };
}

customElements.define('menu-list', MenuList);
