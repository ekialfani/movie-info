import '../../styles/cards/cards.css';
import './card-item.js';

class MovieCards extends HTMLElement {
	set movies(movies){
		this._movies = movies;
		this.render();
	}

	set className(name){
		this.classList.add(name);
	}

	nextEvent = () => {
		const cards = this.querySelector('.card-list');

		cards.scrollLeft += cards.children[0].scrollWidth + 15;
		const prevButton = this.querySelector('.prev-button');
		prevButton.classList.add('show-button');
	}

	prevEvent = () => {
		const cards = this.querySelector('.card-list');
		const prevButton = this.querySelector('.prev-button');

		cards.scrollLeft -= cards.children[0].scrollWidth + 15;

		if(cards.scrollLeft <= cards.children[0].scrollWidth + 15){
			prevButton.classList.remove('show-button');
		}
	}

	render(){
		this.innerHTML = (`
			<div>
				<div class="buttons">
					<button class="prev-button">
						<i class="bi bi-chevron-left"></i>
					</button>
					<button class="next-button">
						<i class="bi bi-chevron-right"></i>
					</button>
				</div>

				<div class="card-list"></div>
			</div>
		`)
		
		this._movies.forEach(movie => {
			const cardItem = document.createElement('card-item');
			cardItem.movie = movie;

			this.querySelector('.card-list').append(cardItem);
		})

		this.querySelector('.next-button').addEventListener('click', this.nextEvent);
		this.querySelector('.prev-button').addEventListener('click', this.prevEvent);
	}
}

customElements.define('movie-cards', MovieCards);