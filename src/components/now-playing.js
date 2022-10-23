import '../styles/now-playing.css';
import './card-item.js';

class NowPlaying extends HTMLElement {
	set movies(movies){
		this._movies = movies;
		this.render();
	}

	nextEvent(){
		const cards = document.querySelector('.cards');

		cards.scrollLeft += cards.children[0].scrollWidth;

		this.previousElementSibling.classList.replace('hide-button', 'show-button');
	}

	prevEvent(){
		const cards = document.querySelector('.cards');

		if(cards.scrollLeft <= cards.children[0].scrollWidth){
			this.classList.replace('show-button', 'hide-button');
		}

		cards.scrollLeft -= cards.children[0].scrollWidth;
	}

	render(){
		this.innerHTML = (`
			<div>
				<h3 class="heading">now playing</h3>
				<ul class="cards"></ul>
				<div class="buttons">
					<button class="prev hide-button">
						<i class="bi bi-chevron-left"></i>
					</button>
					<button class="next">
						<i class="bi bi-chevron-right"></i>
					</button>
				</div>
			</div>
		`)

		this._movies.forEach(movie => {
			const cardItem = document.createElement('card-item');
			cardItem.movie = movie;

			this.querySelector('.cards').append(cardItem);
		})

		this.querySelector('.next').addEventListener('click', this.nextEvent);
		this.querySelector('.prev').addEventListener('click', this.prevEvent);
	}
}

customElements.define('now-playing', NowPlaying);