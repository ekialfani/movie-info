import '../components/app-logo.js';
import '../components/menu-list.js';
import '../components/search-bar.js';
import '../components/movie-jumbotron.js';


const main = () => {
  const menuList = document.querySelector('menu-list');
  const searchBar = document.querySelector('search-bar');

  const onMenuListClicked = (e) => {
    const target = e.target;

    if (target.classList.contains('now-playing')) {
      console.log(target.classList.value);
    }

    if (target.classList.contains('popular')) {
      console.log(target.classList.value);
    }

    if (target.classList.contains('top-rate')) {
      console.log(target.classList.value);
    }

    if (target.classList.contains('up-coming')) {
      console.log(target.classList.value);
    }

    e.preventDefault();
  };

  const onInputClicked = () => {
    const inputValue = searchBar.inputValue;

    console.log(inputValue);
  };

  searchBar.inputEvent = onInputClicked;
  menuList.clickEvent = onMenuListClicked;

  const data = {
  	title: "Suicide Squad",
  	backdrop: "https://www.themoviedb.org/t/p/original/dpoIQ9MN54cxuLZxDABEUOSFGY3.jpg",
  	genres: ["Action", "Superhero", "Sci-Fi"],
  	release: "2016",
  	description: "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences."
  }

  const movieJumbotron = document.querySelector('movie-jumbotron');

  movieJumbotron.movie = data;

};

export default main;

