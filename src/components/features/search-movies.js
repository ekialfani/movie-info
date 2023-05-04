/* eslint-disable no-tabs */
import '../../styles/features/search-movies.css';
import '../cards/movie-cards.js';

// eslint-disable-next-line require-jsdoc
class SearchMovies extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  /**
   * @param {any} movies
   */
  set result(movies) {
    this._movies = movies;
    this.render();
  }

  /**
   * @param {any} message
   */
  set errorMessage(message) {
    this._message = message;
    this.error();
  }

  // eslint-disable-next-line require-jsdoc
  error() {
    this.innerHTML = (`
      <div>
        <h3>search result</h3>
        <p class="error">${this._message}</p>
      </div>
    `);
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML = (`
			<div>
				<h3>search result</h3>
				<div class="cards"></div>
			</div>
		`);

    const movieCards = document.createElement('movie-cards');
    movieCards.classList.add('search-cards');
    movieCards.movies = this._movies;

    this.querySelector('.cards').append(movieCards);
  }
}

customElements.define('search-movies', SearchMovies);
