/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MdAddCircle } from 'react-icons/md';

import MovieService from '../api/MovieService';

import './details.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState();
  const [rate, setRate] = useState();

  const params = useParams();

  const getMovie = async () => {
    const { data } = await MovieService.getMovieDetail(params.id);
    setMovie(data);
    setGenres(data.genres);
    setRate(data.vote_average);
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
          <button className='details-button'>
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
          {genres
            ? genres.length > 1
              ? `Genres: ${genres.map((genre) => ` ${genre.name}`)}`
              : `Genre: ${genres.map((genre) => ` ${genre.name}`)}`
            : ''}
        </li>
        <li>Release Date: {movie.release_date}</li>
        <li>Original language: {movie.original_language}</li>
        <li>Rate: {rate ? rate.toFixed(2) : ''}</li>
        <li>Overview: {movie.overview}</li>
      </ul>
    </main>
  );
};

export default MovieDetails;
