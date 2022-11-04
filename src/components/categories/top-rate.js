import '../../styles/categories/top-rate.css';
import '../cards/movie-cards.js';
import {DataSource} from '../../data/data-source.js';


class TopRate extends HTMLElement {
  async connectedCallback() {
    try {
      const result = await DataSource.getMovieByCategories('top_rated');
      this.render(result);
    } catch (error) {
      console.log(error);
    }
  }

  render(movieData) {
    this.innerHTML = (`
			<div>
				<h3>top rate</h3>
				<div class="cards"></div>
			</div>
		`);

    const movieCards = document.createElement('movie-cards');
    movieCards.className = 'big-cards';
    movieCards.movies = movieData;

    this.querySelector('.cards').append(movieCards);
  }
}

customElements.define('top-rate', TopRate);
