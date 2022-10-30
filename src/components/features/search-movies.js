import '../../styles/features/search-movies.css';
import '../cards/movie-cards.js';

class SearchMovies extends HTMLElement {
  set result(movies) {
    this._movies = movies;
    this.render();
  }

  set errorMessage(message) {
    this._message = message;
    this.error();
  }

  error() {
    this.innerHTML = `<p>${this._message}</p>`;
  }

  render() {
    this.innerHTML = (`
			<div>
				<h3>search result</h3>
				<div class="cards"></div>
			</div>
		`);

    const movieCards = document.createElement('movie-cards');
    movieCards.className = 'search-cards';
    movieCards.movies = this._movies;

    this.querySelector('.cards').append(movieCards);
  }
}

customElements.define('search-movies', SearchMovies);
