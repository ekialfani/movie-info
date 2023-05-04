/* eslint-disable no-tabs */
import '../../styles/categories/top-rate.css';
import '../cards/movie-cards.js';
import {DataSource} from '../../data/data-source.js';


// eslint-disable-next-line require-jsdoc
class TopRate extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  async connectedCallback() {
    try {
      const movies = await DataSource.getMovieByCategories('top_rated');
      this.render(movies);
    } catch (error) {
      this.error(error);
    }
  }

  // eslint-disable-next-line require-jsdoc
  error(message) {
    this.innerHTML = (`
      <div>
        <h3>top rate</h3>
        <p class="error">${message}</p>
      </div>
    `);
  }

  // eslint-disable-next-line require-jsdoc
  render(movies) {
    this.innerHTML = (`
			<div>
				<h3>top rate</h3>
				<div class="cards"></div>
			</div>
		`);

    const movieCards = document.createElement('movie-cards');
    movieCards.classList.add('big-cards');
    movieCards.movies = movies;

    this.querySelector('.cards').append(movieCards);
  }
}

customElements.define('top-rate', TopRate);
