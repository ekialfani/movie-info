import './jumbotron-item.js';

class MovieJumbotron extends HTMLElement {
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