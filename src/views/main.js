import '../components/app-bar/app-logo.js';
import '../components/app-bar/search-bar.js';
import '../components/jumbotron/movie-jumbotron.js';
import '../components/jumbotron/jumbotron-item.js';
import '../components/cards/movie-cards.js';


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
   		release_date: '2016-08-03',
      vote_average: 5.91
  	},
  	{
		id: 324668,
  		title: "Jason Bourne",
  		backdrop: "https://www.themoviedb.org/t/p/original/7mHeyU0a538bgguOeF57I8ZroSk.jpg",
  		release_date: "2016-07-27",
      vote_average: 5.25
  	},
  	{
  		id: 278924,
  		"title": "Mechanic: Resurrection",
  		backdrop: "https://www.themoviedb.org/t/p/original/3f5rBEc6ioRBO2CATDt4sKjEJnY.jpg",
  		release_date: "2016-08-25",
      vote_average: 4.59
  	},
    {
      "id": 328387,
      "title": "Nerve",
      "backdrop": "https://www.themoviedb.org/t/p/original/fg04CQyJzuDJ82jm2meY37n9XyE.jpg",
      "release_date": "2016-07-27",
      "vote_average": 6.84
    },
    {
      "id": 376659,
      "title": "Bad Moms",
      "backdrop": "https://www.themoviedb.org/t/p/original/7lcwCb9DqQxffR5xdJZPOsxkxPL.jpg",
      "release_date": "2016-07-28",
      "vote_average": 5.49
    },
    {
      "id": 328387,
      "title": "Nerve",
      "backdrop": "https://www.themoviedb.org/t/p/original/fg04CQyJzuDJ82jm2meY37n9XyE.jpg",
      "release_date": "2016-07-27",
      "vote_average": 6.84
    },
    {
      "id": 376659,
      "title": "Bad Moms",
      "backdrop": "https://www.themoviedb.org/t/p/original/7lcwCb9DqQxffR5xdJZPOsxkxPL.jpg",
      "release_date": "2016-07-28",
      "vote_average": 5.49
    }

  ]


  const movieJumbotron = document.querySelector('movie-jumbotron');
  movieJumbotron.movies = data;

  nowPlaying(data);

};

function nowPlaying(data){
  const parent = document.querySelector('.now-playing');
  const cards = document.createElement('movie-cards');

  cards.movies = data;
  cards.className = 'small-cards';

  parent.append(cards);
}

export default main;

