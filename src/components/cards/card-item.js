class CardItem extends HTMLElement {
	set movie(movie){
		this.id = movie.id;
		this._movie = movie;
		this.render();
	}

	activeCard(){
		const cardActives = document.querySelectorAll('card-item span');
				
		cardActives.forEach(card => card.classList.remove('active'));

		this.querySelector('span').classList.add('active');
	}

	getMovieDetail(){
		console.log(this.id);
		this.activeCard();
	}

	render(){
		this.innerHTML = (`
			<div>
				<img src=${this._movie.backdrop}>
				<div class="card-info">
					<h4 class="title">${this._movie.title}</h4>
					<p class="release">${this._movie.release_date}</p>
					<div class="rating"></div>
				</div>
				<span></span>
			</div>
		`)

		const rating = Math.round(this._movie.vote_average  / 2);

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

		this.addEventListener('click', this.getMovieDetail);
	}
}

customElements.define('card-item', CardItem);