import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const BASE_IMG_URL_MODAL = 'https://image.tmdb.org/t/p/original';
const API_KEY = '4f2faeab890aafa2eac5bf3b2939c5b8';

export const api = {
	getPopularMovies: () =>
		axios.get(BASE_URL + '/movie/popular', {
			params: {
				api_key: API_KEY,
			},
		}),
	getTopRatedMovies: () =>
		axios.get(BASE_URL + '/movie/top_rated', {
			params: {
				api_key: API_KEY,
			},
		}),

	getUpcoming: () =>
		axios.get(BASE_URL + '/movie/upcoming', {
			params: {
				api_key: API_KEY,
			},
		}),
	searchMovies: (value) =>
		axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=4f2faeab890aafa2eac5bf3b2939c5b8&query=${value}`,
		),

		moreInfo: (value) =>
		axios.get(BASE_URL + `/movie/${value}`, {
			params: {
				api_key: API_KEY,
			},
		}),
};
