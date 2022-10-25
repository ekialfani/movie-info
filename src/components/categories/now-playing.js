import '../../styles/categories/now-playing.css';
import data from '../../data/data.js';

class NowPlaying extends HTMLElement {
	connectedCallback(){
		this.render(data);
	}

	render(movieData){
		this.innerHTML = (`
			<div>
				<h3>now playing</h3>
				<div class="cards"></div>
			</div>
		`)

		const movieCards = document.createElement('movie-cards');
		movieCards.className = 'small-cards';
		movieCards.movies = movieData;
		
		this.querySelector('.cards').append(movieCards);
	}
}

customElements.define('now-playing', NowPlaying);