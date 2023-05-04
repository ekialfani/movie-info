import axios from 'axios';
// eslint-disable-next-line require-jsdoc
export class DataSource {
  // eslint-disable-next-line require-jsdoc
  static searchMovies(keyword) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=375ce906f49de003c1a2474b933cbca4&language=en-US&query=${keyword}&page=1&include_adult=false`)
        .then((response) => {
          const result = response.data.results;
          if (result.length === 0) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('movie not found...');
          }

          return result;
        })
        .catch((error) => {
          if (error.response) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('something went wrong...');
          } else if (error.request) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('network error...');
          } else {
            return Promise.reject(error);
          }
        });
  }

  // eslint-disable-next-line require-jsdoc
  static getTrendingMovies() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=375ce906f49de003c1a2474b933cbca4`)
        .then((response) => response.data.results)
        .catch((error) => {
          if (error.response) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('something went wrong...');
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('network error...');
          }
        });
  }

  // eslint-disable-next-line require-jsdoc
  static getMovieByCategories(category) {
    return axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=375ce906f49de003c1a2474b933cbca4&language=en-US&page=1&region=US`)
        .then((response) => response.data.results)
        .catch((error) => {
          if (error.response) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('something went wrong...');
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('network error...');
          }
        });
  }

  // eslint-disable-next-line require-jsdoc
  static getDetails(movieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=375ce906f49de003c1a2474b933cbca4&language=en-US`)
        .then((response) => response.data)
        .catch((error) => {
          if (error.response) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('something went wrong...');
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject('network error...');
          }
        });
  }
}
