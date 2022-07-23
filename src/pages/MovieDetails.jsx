/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieService from '../api/MovieService';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState();

  const params = useParams();

  const getMovie = async () => {
    const { data } = await MovieService.getMovieDetail(params.id);
    setMovie(data);
    setGenres(data.genres);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <main>
      <div className='details-container'>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt=''
        />
        <span className='details-title'>{movie.title}</span>
      </div>
      <div className=''>
        <div className=''>
          <ul>
            <li>
              {genres
                ? genres.length > 1
                  ? `Genres: ${genres.map((genre) => ` ${genre.name}`)}`
                  : `Genre: ${genres.map((genre) => ` ${genre.name}`)}`
                : ''}
            </li>
            <li>Release Date: {movie.release_date}</li>
            <li>Original language: {movie.original_language}</li>
            <li>Popularity: {movie.popularity}</li>
            <li>Overview: {movie.overview}</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
