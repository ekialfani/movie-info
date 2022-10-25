import '../components/app-bar/search-bar.js';
import '../components/jumbotron/movie-jumbotron.js';
import '../components/cards/movie-cards.js';
import '../components/categories/now-playing.js';
import '../components/categories/top-rate.js';


const main = () => {
  const searchBar = document.querySelector('search-bar');

  const onInputClicked = () => {
    const inputValue = searchBar.inputValue;

    console.log(inputValue);
  };

  searchBar.inputEvent = onInputClicked;
};

export default main;

