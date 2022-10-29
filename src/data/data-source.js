export default class DataSource {
	static searchMovies(keyword){
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=375ce906f49de003c1a2474b933cbca4&language=en-US&query=${keyword}&page=1&include_adult=false`)
		.then(response => {
			if(!response.ok){
				return Promise.reject('Error: something went wrong!');
			}

			return response.json();
		})
		.then(response => {
			if(response.results.length === 0){
				return Promise.reject('Movie Not Found!');
			}

			return response.results;
		});
	}

	static getTrendingMovies(){
		return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=375ce906f49de003c1a2474b933cbca4`)
		.then(response => {
			if(!response.ok){
				return Promise.reject('Error: something went wrong!');
			}

			return response.json();
		})
		.then(response => response.results);
	}

	static getMovieByCategories(category){
		return fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=375ce906f49de003c1a2474b933cbca4&language=en-US&page=1&region=US`)
		.then(response => {

			if(!response.ok){
				return Promise.reject('error: something went wrong!');
			}

			return response.json();
		})
		.then(response => response.results);
	}

	static getDetails(movieId){
		return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=375ce906f49de003c1a2474b933cbca4&language=en-US`)
		.then(response => {
			if(!response.ok){
				return Promise.reject('error: something went wrong!');
			}

			return response.json();
		})
		.then(response => response);
	}
}

