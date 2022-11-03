import '../../styles/jumbotron/movie-jumbotron.css';
import './jumbotron-item.js';
import DataSource from '../../data/data-source.js';

class MovieJumbotron extends HTMLElement {
  async connectedCallback() {
    const result = await DataSource.getTrendingMovies();
    this.render(result);

    this.interval = setInterval(() => this.nextScroll(), 3000);
  }

  set newInterval(number){
    this.interval = setInterval(() => this.nextScroll(), number); 
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  nextScroll() {
    if (this.scrollLeft >= (this.scrollWidth - this.children[0].scrollWidth)) {
      return this.scrollLeft -= this.scrollWidth;
    }

    this.scrollLeft += this.children[0].scrollWidth + 1;
  }

  render(movieData) {
    movieData.forEach((movie) => {
      const JumbotronItem = document.createElement('jumbotron-item');
      JumbotronItem.movie = movie;

      this.append(JumbotronItem);
    });
  }
}

customElements.define('movie-jumbotron', MovieJumbotron);
