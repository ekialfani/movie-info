class MovieDetails extends HTMLElement {
    set movie(movie){
    	this._movie = movie;
    	this.render();
    }

    set errorMessage(message){
        this.error(message);
    }

    timeConvert(runtime){
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        
        return `${hours}h ${minutes}min.`;
    }

    dateConvert(date){
        return new Date(date).getFullYear();
    }

    error(message){
        this.innerHTML = `<div class="error-message"><p>${message}</p></div>`;
    }

    closeCard(){
        console.log(this);
    }

    render(){
        const { title, release_date, genres, runtime, overview, backdrop_path, vote_average} = this._movie;
        const default_path = 'wwemzKWzjKYJFfCeiB57q3r4Bcm.png';
        const path = (backdrop_path === null) ? default_path : backdrop_path;

        this.innerHTML = (`
        	<div class="details-card">
                <img src="https://www.themoviedb.org/t/p/w500/${path}">
                <div class="card-info">
                    <h2 class="title">${title}</h2>
                    <div class="year-genre-duration">
                        <span>${this.dateConvert(release_date)}</span>
                        <i class="bi bi-dot"></i>
                        <span>${genres.map(genre => genre.name).join(', ')}</span>
                        <i class="bi bi-dot"></i>
                        <i class="bi bi-clock-history"></i>
                        <span>${this.timeConvert(runtime)}</span>
                    </div>
                    <div class="rating"></div>

                    <p class="overview">
                        <strong>overview:</strong><br>
                        <span>${overview}<span>
                    </p>
                </div>
                <button class="close"><i class="bi bi-x"></i></button>
        	</div>
        `);

        const rating = Math.round(vote_average / 2);

        for(let i = 1; i <= 5; i++){
            const starIcon = document.createElement('i');
            starIcon.classList.add('bi');

            if(i <= rating){
                starIcon.classList.add('bi-star-fill');
            }else {
                starIcon.classList.add('bi-star');
            }

            this.querySelector('.rating').append(starIcon);
        }

        this.querySelector('.close').addEventListener('click', this.closeCard);
    }
}

customElements.define('movie-details', MovieDetails);