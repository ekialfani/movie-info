import '../styles/movie-jumbotron.css';
import './jumbotron-item.js';

class MovieJumbotron extends HTMLElement {
	connectedCallback(){
		this.interval = setInterval(() => this.nextScroll(), 3000);
	}

	disconnectedCallback(){
		clearInterval(this.interval);
	}

	nextScroll(){
		if(this.scrollLeft >= (this.scrollWidth - this.children[0].scrollWidth)){
			return this.scrollLeft -= this.scrollWidth;
		}

		this.scrollLeft += this.children[0].scrollWidth;
	}

	set movies(movies){
		this._movies = movies;
		this.render();
	}

	render(){
		this._movies.forEach(movie => {
			const JumbotronItem = document.createElement('jumbotron-item');
			JumbotronItem.movie = movie;
			this.append(JumbotronItem);
		})
	}
}

customElements.define('movie-jumbotron', MovieJumbotron);