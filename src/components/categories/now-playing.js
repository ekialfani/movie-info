import '../../styles/categories/now-playing.css';
import {DataSource} from '../../data/data-source.js';

class NowPlaying extends HTMLElement {
  async connectedCallback() {
    try {
      const result = await DataSource.getMovieByCategories('now_playing');
      this.render(result);
    } catch (error) {
      this.error(error);
    }
  }

  error(message) {
    this.innerHTML = (`
      <div>
        <h3>now playing</h3>
        <p class="error">${message}</p>
      </div>
      `);
  }

  render(movieData) {
    this.innerHTML = (`
			<div>
				<h3>now playing</h3>
				<div class="cards"></div>
			</div>
		`);

    const movieCards = document.createElement('movie-cards');
    movieCards.className = 'small-cards';
    movieCards.movies = movieData;

    this.querySelector('.cards').append(movieCards);
  }
}

customElements.define('now-playing', NowPlaying);
