import '../../styles/jumbotron/jumbotron-item.css';

class JumbotronItem extends HTMLElement {
	set movie(movie){
		this._movie = movie;
		this.render();
	}

	set clickEvent(event){
		this._event = event;
		this.render();
	}

	getMovieDetail(){
		console.log(this.getAttribute('id'));
	}

	render(){
		this.innerHTML = (`
			<div>
				<img src=${this._movie.backdrop} alt=${this._movie.title}>
				<div class="info">
					<h2 class="title">${this._movie.title}</h2>
					<p class="release">${this._movie.release_date}</p>
						<div class="rating"></div>
					<button type="submit" class="detail-button" id=${this._movie.id}>show detals</button>
				</div>
			</div>
		`)

		const rating = Math.round(this._movie.vote_average) / 2;

		for(let i = 1; i <= 5; i++){
			const starIcon = document.createElement('i');
			starIcon.classList.add('bi');

			if(i <= rating){
				starIcon.classList.add('bi-star-fill');
			}else {
				starIcon.classList.add('bi-star');
			}

			this.querySelector('.rating').append(starIcon);
		}

		this.querySelector('.detail-button').addEventListener('click', this.getMovieDetail);

	}

}

customElements.define('jumbotron-item', JumbotronItem);