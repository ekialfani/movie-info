import '../../styles/jumbotron/movie-jumbotron.css';
import './jumbotron-item.js';
import DataSource from '../../data/data-source.js';

class MovieJumbotron extends HTMLElement {
	async connectedCallback(){
		try {
			const result = await DataSource.getTrendingMovies();
			this.render(result);

		}catch(error){
			this.error(error);
		}

		this.interval = setInterval(() => this.nextScroll(), 3000);
	}

	disconnectedCallback(){
		clearInterval(this.interval);
	}

	nextScroll(){
		const jumbotron = this.querySelector('.jumbotron');

		if(jumbotron.scrollLeft >= (jumbotron.scrollWidth - jumbotron.children[0].scrollWidth)){
			return jumbotron.scrollLeft -= jumbotron.scrollWidth;
		}

		jumbotron.scrollLeft += jumbotron.children[0].scrollWidth;
	}

	error(message){
		this.innerHTML = `<p class="error">${message}</p>`;
	}

	render(movieData){
		this.innerHTML = `<div class="jumbotron"></div>`

		movieData.forEach(movie => {
			const JumbotronItem = document.createElement('jumbotron-item');
			JumbotronItem.movie = movie;

			this.querySelector('.jumbotron').append(JumbotronItem);
		})
	}
}

customElements.define('movie-jumbotron', MovieJumbotron);