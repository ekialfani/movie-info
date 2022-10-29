import '../components/app-bar/search-bar.js';
import '../components/categories/now-playing.js';
import '../components/categories/top-rate.js';
import '../components/features/search-movies.js';
import DataSource from '../data/data-source.js';


const renderCategories = () => {
  const movieList = document.querySelector('.movie-list');
  const nowPlaying = document.createElement('now-playing');
  const topRate = document.createElement('top-rate');

  movieList.innerHTML = '';
  movieList.append(nowPlaying, topRate);
}

const renderSearchResult = (result) => {
  const movieList = document.querySelector('.movie-list');
  const searchMovies = document.createElement('search-movies');

  movieList.innerHTML = '';
  searchMovies.result = result;
  movieList.append(searchMovies);
}

const renderFallbackResult = (message) => {
  const movieList = document.querySelector('.movie-list');
  const searchMovies = document.createElement('search-movies');

  movieList.innerHTML = '';
  searchMovies.errorMessage = message;
  movieList.append(searchMovies);
}


const main = () => {
  const searchBar = document.querySelector('search-bar');

  const onInputChanged = async () => {
    const inputValue = searchBar.inputValue;
    const keyword = [...inputValue].map(input => ((input === ' ' ) ? input = '%' : input)).join('');
    
    try {
      if(keyword !== ''){
        const result = await DataSource.searchMovies(keyword);

        renderSearchResult(result);

      }else {
        renderCategories();
      }
      
    }catch(error){
      renderFallbackResult(error);
    }
  }

  searchBar.inputEvent = onInputChanged;

  renderCategories();
};

export default main;

