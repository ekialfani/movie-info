import '../../styles/categories/up-coming.css';
import '../cards/movie-cards.js';
import DataSource from '../../data/data-source.js';

class UpComing extends HTMLElement {
	async connectedCallback(){
		try {
			const result = await DataSource.getMovieByCategories('upcoming');
			this.render(result);

		}catch(error){
			this.error(error);
		}
	}

	error(message){
		this.innerHTML = `<p class="error">${message}</p>`;
	}

	render(movieData){
		this.innerHTML = (`
			<div class="upcoming">
				<h3>up coming</h3>
				<div class="cards"></div>
			</div>
		`);

		const movieCards = document.createElement('movie-cards');
		movieCards.className = 'sidebar-cards';
		movieCards.movies = movieData;

		this.querySelector('.cards').append(movieCards);
	}
}

customElements.define('up-coming', UpComing);