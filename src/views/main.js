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

  const data = [
  	{
  		id: 297761,
  		title: 'Suicide Squad',
  		backdrop: 'https://www.themoviedb.org/t/p/original/dpoIQ9MN54cxuLZxDABEUOSFGY3.jpg',
 		release_date: '2016-08-03'
  	},
  	{
		id: 324668,
  		title: "Jason Bourne",
  		backdrop: "https://www.themoviedb.org/t/p/original/7mHeyU0a538bgguOeF57I8ZroSk.jpg",
  		"release_date": "2016-07-27"
  	},
  	{
  		id: 278924,
  		"title": "Mechanic: Resurrection",
  		backdrop: "https://www.themoviedb.org/t/p/original/3f5rBEc6ioRBO2CATDt4sKjEJnY.jpg",
  		release_date: "2016-08-25",
  	}

  ]

  const movieJumbotron = document.querySelector('movie-jumbotron');

  movieJumbotron.movies = data;



};

export default main;

