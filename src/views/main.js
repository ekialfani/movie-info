import '../components/app-logo.js';
import '../components/search-bar.js';
import '../components/movie-jumbotron.js';


const main = () => {
  const searchBar = document.querySelector('search-bar');

  const onInputClicked = () => {
    const inputValue = searchBar.inputValue;

    console.log(inputValue);
  };

  searchBar.inputEvent = onInputClicked;

};

export default main;

