/* eslint-disable no-tabs */
/* eslint-disable camelcase */
import '../../styles/jumbotron/jumbotron-item.css';
import '../features/movie-details.js';
import {DataSource} from '../../data/data-source.js';

// eslint-disable-next-line require-jsdoc
class JumbotronItem extends HTMLElement {
  /**
   * @param {{ id: string; }} movie
   */
  set movie(movie) {
    this._movie = movie;
    this.id = movie.id;
    this.render();
  }

  /**
   * @param {any} event
   */
  set clickEvent(event) {
    this._event = event;
    this.render();
  }

  _getMovieDetails = async () => {
    const movieDetails = document.querySelector('movie-details');

    try {
      const movie = await DataSource.getDetails(this.id);
      movieDetails.movie = movie;
      movieDetails.classList.add('show-details');
      clearInterval(this.parentElement.interval);
      document.body.style.overflow = 'hidden';
    } catch (error) {
      movieDetails.errorMessage = error;
    }
  };
  // eslint-disable-next-line require-jsdoc
  get getMovieDetails() {
    return this._getMovieDetails;
  }
  // eslint-disable-next-line require-jsdoc
  set getMovieDetails(value) {
    this._getMovieDetails = value;
  }

  // eslint-disable-next-line require-jsdoc
  dateConvert(date) {
    return new Date(date).getFullYear();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    // eslint-disable-next-line camelcase
    const {title, backdrop_path, release_date, vote_average} = this._movie;

    this.innerHTML = (`
			<div>
				<img src="https://www.themoviedb.org/t/p/w500/${backdrop_path}" alt=${title}>
				<div class="info">
					<h2 class="title">${title}</h2>
					<p class="release">(${this.dateConvert(release_date)})</p>
						<div class="rating"></div>
					<button type="submit" class="detail-button">show details</button>
				</div>
			</div>
		`);

    const rating = Math.round(vote_average) / 2;

    for (let i = 1; i <= 5; i++) {
      const starIcon = document.createElement('i');
      starIcon.classList.add('bi');

      if (i <= rating) {
        starIcon.classList.add('bi-star-fill');
      } else {
        starIcon.classList.add('bi-star');
      }

      this.querySelector('.rating').append(starIcon);
    }

    // eslint-disable-next-line max-len
    this.querySelector('.detail-button').addEventListener('click', this.getMovieDetails);
  }
}

customElements.define('jumbotron-item', JumbotronItem);
