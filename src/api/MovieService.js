import axios from 'axios';

const API_KEY = '3e074b6d14a7158d77bae02b97da066e';
const BASE_URL = 'https://api.themoviedb.org/3/';
// const SEARCH_URL =
//   'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const baseURL = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;
//   `${process.env.BASE_URL}${path}?api_key=${process.env.API_KEY}`;
// const searchUrl = (path) => `${SEARCH_URL}${path}?api_key=${API_KEY}`;

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
}

export default MovieService;
