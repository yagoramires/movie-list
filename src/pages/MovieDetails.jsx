/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MdAddCircle } from 'react-icons/md';

import MovieService from '../api/MovieService';

import './details.css';
import { useStateContext } from '../contexts/ContextProvider';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState();
  const [rate, setRate] = useState();

  const { favorites, setFavorites } = useStateContext();

  const params = useParams();

  const getMovie = async () => {
    const { data } = await MovieService.getMovieDetail(params.id);
    setMovie(data);
    setGenres(data.genres);
    setRate(data.vote_average);
  };

  const handleFavorite = (movie) => {
    let favoritesArr = [...favorites];
    if (favoritesArr.includes(movie)) return;
    favoritesArr.push(movie);
    favorites ? setFavorites(favoritesArr) : setFavorites([movie]);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <main className='details-section'>
      <div className='details-container'>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          className='details-image'
        />
        <div className='details-button-container'>
          <button
            className='details-button'
            onClick={() => handleFavorite(movie.id)}
          >
            <MdAddCircle style={{ color: '#FF00F5' }} size={15} />
            <p>
              <span>+</span> Add Favorite
            </p>
          </button>
        </div>
        <span className='details-title'>{movie.title}</span>
      </div>

      <ul className='details-list'>
        <li>
          <span>
            {genres ? (genres.length > 1 ? 'Genres: ' : 'Genre: ') : ''}
          </span>
          {genres ? genres.map((genre) => ` ${genre.name} |`) : ''}
        </li>
        <li>
          <span>Release Date:</span> {movie.release_date}
        </li>
        <li>
          <span>Original language:</span> {movie.original_language}
        </li>
        <li>
          <span>Rate:</span> {rate ? rate.toFixed(2) : ''}
        </li>
        <li>
          <span>Overview:</span> {movie.overview}
        </li>
      </ul>
    </main>
  );
};

export default MovieDetails;
