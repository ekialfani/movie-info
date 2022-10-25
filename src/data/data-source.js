export default class DataSource {
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
		return fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=375ce906f49de003c1a2474b933cbca4&language=en-US&page=1&region=us`)
		.then(response => {
			if(!response.ok){
				return Promise.reject('error: something went wrong!');
			}

			return response.json();
		})
		.then(response => response.results);
	}
}

