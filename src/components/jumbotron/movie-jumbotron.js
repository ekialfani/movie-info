/* eslint-disable valid-jsdoc */
import '../../styles/jumbotron/movie-jumbotron.css';
import './jumbotron-item.js';
import {DataSource} from '../../data/data-source.js';

// eslint-disable-next-line require-jsdoc
class MovieJumbotron extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  async connectedCallback() {
    const movies = await DataSource.getTrendingMovies();
    this.render(movies);

    this.setScrollCard(3000, 0);
  }

  // eslint-disable-next-line require-jsdoc
  /**
   * // eslint-disable-next-line valid-jsdoc
   * @param {number | undefined} number
   * @param {any} interval
   */
  set newInterval(interval) {
    this.setScrollCard(interval, this.lastIndex);
  }

  setScrollCard = (value, index) => {
    this.interval = setInterval(() => {
      if (index === this.children.length - 1) index = 0;
      this.nextScroll(index);
      this.lastIndex = index;
      index++;
    }, value);
  };

  // eslint-disable-next-line require-jsdoc
  disconnectedCallback() {
    clearInterval(this.interval);
  }

  // eslint-disable-next-line require-jsdoc
  nextScroll(index) {
    // eslint-disable-next-line max-len
    if (this.scrollLeft >= (this.scrollWidth - this.children[index].offsetWidth)) {
      return this.scrollLeft -= this.scrollWidth;
    }

    this.scrollLeft += this.children[index].offsetWidth;
  }

  // eslint-disable-next-line require-jsdoc
  render(movies) {
    movies.forEach((movie) => {
      const JumbotronItem = document.createElement('jumbotron-item');
      JumbotronItem.movie = movie;

      this.append(JumbotronItem);
    });
  }
}

customElements.define('movie-jumbotron', MovieJumbotron);
