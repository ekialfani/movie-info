import '../styles/jumbotron.css';

class MovieJumbotron extends HTMLElement {
	set movie(movie){
		this._movie = movie;
		this.render();
	}

	render(){
		this.innerHTML = (`
			<div class="jumbotron">
				<div class="hero">
					<img src=${this._movie.backdrop}>
				</div>
				<div class="movie-info">
					<h2 class="title">${this._movie.title}</h2>
					<p class="genre">
						${this._movie.genres.map(genre => `<span>${genre}</span>`).join(' | ')}
					</p>
					<p class="description">${this._movie.description}</p>
					<input class="detail-button" type="button" value="show details">
				</div>
			</div>
		`)
	}
}

customElements.define('movie-jumbotron', MovieJumbotron);