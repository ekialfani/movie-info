import '../../styles/jumbotron/jumbotron-item.css';
import '../features/movie-details.js';
import DataSource from '../../data/data-source.js';

class JumbotronItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.id = movie.id;
    this.render();
  }

  set clickEvent(event) {
    this._event = event;
    this.render();
  }

  getMovieDetails = async () => {
    const movieDetails = document.querySelector('movie-details');

    try {
      const result = await DataSource.getDetails(this.id);
      movieDetails.movie = result;
      movieDetails.classList.add('show-details');
      clearInterval(this.parentElement.interval);
      document.body.style.overflow = 'hidden';

    }catch(error) {
      movieDetails.errorMessage = error;
    }
  }

  dateConvert(date){
    return new Date(date).getFullYear();
  }

  render() {
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

    this.querySelector('.detail-button').addEventListener('click', this.getMovieDetails);
  }
}

customElements.define('jumbotron-item', JumbotronItem);
