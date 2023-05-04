/* eslint-disable no-tabs */
import '../features/movie-details.js';
import {DataSource} from '../../data/data-source.js';

// eslint-disable-next-line require-jsdoc
class CardItem extends HTMLElement {
  /**
   * @param {{ id: string; }} movie
   */
  set movie(movie) {
    this.id = movie.id;
    this._movie = movie;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  activeCard() {
    const cardActives = document.querySelectorAll('card-item span');

    cardActives.forEach((card) => card.classList.remove('active'));

    this.querySelector('span').classList.add('active');
  }

  // eslint-disable-next-line require-jsdoc
  async showMovieDetails() {
    const movieDetails = document.querySelector('movie-details');

    try {
      const movie = await DataSource.getDetails(this.id);

      movieDetails.movie = movie;
    } catch (error) {
      movieDetails.errorMessage = error;
    }

    movieDetails.classList.add('show-details');

    document.body.style.overflow = 'hidden';
    const movieJumbotron = document.querySelector('movie-jumbotron');
    clearInterval(movieJumbotron.interval);

    this.activeCard();
  }

  // eslint-disable-next-line require-jsdoc
  dateConvert(date) {
    return new Date(date).getFullYear();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    // eslint-disable-next-line camelcase
    const {backdrop_path, title, release_date, vote_average} = this._movie;
    // eslint-disable-next-line camelcase
    const default_path = 'wwemzKWzjKYJFfCeiB57q3r4Bcm.png';
    // eslint-disable-next-line camelcase
    const path = (backdrop_path === null) ? default_path : backdrop_path;

    this.innerHTML = (`
			<div>
				<img src="https://www.themoviedb.org/t/p/w500/${path}">
				<div class="card-info">
					<h4 class="title">${title}</h4>
					<p class="release">(${this.dateConvert(release_date)})</p>
					<div class="rating"></div>
				</div>
				<span></span>
			</div>
		`);

    // eslint-disable-next-line camelcase
    const rating = Math.round(vote_average / 2);

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

    this.addEventListener('click', this.showMovieDetails);
  }
}

customElements.define('card-item', CardItem);
