import axios from 'axios';

const API_KEY = '3e074b6d14a7158d77bae02b97da066e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/';

const baseURL = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;
const searchUrl = (path, query) =>
  `${SEARCH_URL}${path}?&api_key=${API_KEY}&query=${query}`;

class MovieService {
  static getLatestMovies() {
    return axios(baseURL('movie/upcoming'));
  }

  static getPopularMovies() {
    return axios(baseURL('movie/popular'));
  }

  static getTvShows() {
    return axios(baseURL('tv/popular'));
  }

  static getMovieDetail(id) {
    return axios(baseURL(`movie/${id}`));
  }

  static getSerieDetail(id) {
    return axios(baseURL(`tv/${id}`));
  }

  static searchMovie(query) {
    return axios(searchUrl(`movie`, query));
  }
}

export default MovieService;
