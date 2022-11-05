class MovieCredits extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({mode: 'open'});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = (`
			<style>
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}

				:host {
					background-color: #27272a;					
				}

				.credits {
					padding: 8%;
				}

				.credits a {
					display: flex;
					justify-content: center;
					margin-bottom: 20px;
				}

				.credits img {
					width: 150px;
				}

				.credits h4 {
					font-weight: 500;
					letter-spacing: 1px;
					margin-bottom: 30px;
					color: #fafafa;
					text-transform: capitalize;
				}

				.credits figcaption {
					text-align: center;
					color: #888;
					font-size: .9em;
				}

				@media screen and (max-width: 992px){
					.credits {
						text-align: center;
					}
				}

				@media screen and (max-width: 768px){
					.credits {
						padding: 30px 20px;
					}

					.credits h4 {
						margin-bottom: 20px;
						font-size: 0.8em;
					}

					.credits img {
						width: 100px;
					}

					.credits figcaption {
						font-size: 0.7em;
					}
				}
			</style>

			<div class="credits">
				<h4>credits:</h4>
				<figure>
					<a href="https://www.themoviedb.org/">
						<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg">
					</a>
					<figcaption>This product uses the TMDB API but is not endorsed or certified by TMDB.</figcaption>
				</figure>
			</div>
		`)
	}
}

customElements.define('movie-credits', MovieCredits);