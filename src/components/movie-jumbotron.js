class MovieJumbotron extends HTMLElement {
	set movie(movie){
		this._movie = movie;
		this.render();
	}

	render(){
		this.innerHTML = (`
			<div class="jumbotron">
				<img src=${this._movie.backdrop} alt="${this._movie.title}">
				<div class="movie-info">
					<h2>${this._movie.title}</h2>
					<p>
						${this._movie.genres.map(genre => `<span>${genre}</span>`).join(' | ')}
					</p>
					<p>${this._movie.description}</p>
					<h4>Release: ${this._movie.release}</h4>
					<button class="detail-button">show details</button>
				</div>
			</div>
		`)
	}
}

customElements.define('movie-jumbotron', MovieJumbotron);