import '../components/app-bar/app-logo.js';
import '../components/app-bar/search-bar.js';
import '../components/jumbotron/movie-jumbotron.js';
import '../components/cards/movie-cards.js';
import '../components/categories/now-playing.js';
import data from '../data/data.js';

// import test from '../data/movie-data.js';


const main = () => {
  const searchBar = document.querySelector('search-bar');

  const onInputClicked = () => {
    const inputValue = searchBar.inputValue;

    console.log(inputValue);
  };

  searchBar.inputEvent = onInputClicked;

  const movieJumbotron = document.querySelector('movie-jumbotron');
  movieJumbotron.movies = data;

  // function test() {
  //   return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=375ce906f49de003c1a2474b933cbca4&language=en-US&page=1&region=us')
  // .then(response => response.json()).then(response => console.log(response));
  // }

  // test();

};

export default main;

