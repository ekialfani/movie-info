import '../components/app-bar/app-logo.js';
import '../components/app-bar/search-bar.js';
import '../components/jumbotron/movie-jumbotron.js';
import '../components/cards/movie-cards.js';
import '../components/categories/now-playing.js';
import data from '../data/data.js';


const main = () => {
  const searchBar = document.querySelector('search-bar');

  const onInputClicked = () => {
    const inputValue = searchBar.inputValue;

    console.log(inputValue);
  };

  searchBar.inputEvent = onInputClicked;

  const movieJumbotron = document.querySelector('movie-jumbotron');
  movieJumbotron.movies = data;

};

export default main;

