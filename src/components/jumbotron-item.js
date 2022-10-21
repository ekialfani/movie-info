class JumbotronItem extends HTMLElement {
	set movie(movie){
		this._movie = movie;
		this.render();
	}

	render(){
		this.innerHTML = (`
			<div>
				<img src=${this._movie.backdrop} alt=${this._movie.title}>
				<h2 class="title">${this._movie.title}</h2>
				<h4 class="release">${this._movie.release_date}</h4>
				<button type="submit" class="detail-button" id=${this._movie.id}>show detals</button>
			</div>
		`)
	}

}

customElements.define('jumbotron-item', JumbotronItem);