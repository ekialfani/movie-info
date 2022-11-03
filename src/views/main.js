import '../components/app-bar/search-bar.js';
import '../components/categories/now-playing.js';
import '../components/categories/top-rate.js';
import '../components/features/search-movies.js';
import DataSource from '../data/data-source.js';


const updateUpcomingStyle = (height, display) => {
  const sidebarCards = document.querySelector('.sidebar-cards div');
  const upcoming = document.querySelector('up-coming');

  if(window.screen.width > 992){
    sidebarCards.style.height = height;
  }else {
    sidebarCards.style.height = 'max-content';
    upcoming.style.display = display;
  }

}

const renderCategories = () => {
  const movieList = document.querySelector('.movie-list');
  const nowPlaying = document.createElement('now-playing');
  const topRate = document.createElement('top-rate');

  movieList.innerHTML = '';
  movieList.append(nowPlaying, topRate);
};

const renderSearchResult = (result) => {
  const movieList = document.querySelector('.movie-list');
  const searchMovies = document.createElement('search-movies');

  movieList.innerHTML = '';
  searchMovies.result = result;
  movieList.append(searchMovies);
};

const renderFallbackResult = (message) => {
  const movieList = document.querySelector('.movie-list');
  const searchMovies = document.createElement('search-movies');

  movieList.innerHTML = '';
  searchMovies.errorMessage = message;
  movieList.append(searchMovies);
};


const main = () => {
  const searchBar = document.querySelector('search-bar');

  const onInputChanged = async () => {
    const inputValue = searchBar.inputValue;
    const keyword = [...inputValue].map((input) => {
      if (input === ' ') {
        return input = '%';
      }

      return input;
    }).join('');

    if(keyword.length === 0){
      updateUpcomingStyle('70vmin', 'inline-block');
        renderCategories();
    }else {
      try {
        const result = await DataSource.searchMovies(keyword);

        renderSearchResult(result);
        updateUpcomingStyle('80vmax', 'none');
      
      } catch (error) {
        renderFallbackResult(error);
        updateUpcomingStyle('70vmin', 'none');
      }
    }
  };

  searchBar.inputEvent = onInputChanged;

  renderCategories();
};

export default main;

