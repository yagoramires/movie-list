/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieService from '../api/MovieService';

const SerieDetails = () => {
  const [serie, setSerie] = useState({});
  const [genres, setGenres] = useState();

  const params = useParams();

  const getMovie = async () => {
    const { data } = await MovieService.getSerieDetail(params.id);
    setSerie(data);
    setGenres(data.genres);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <main>
      <div className=''>
        <div className=''>
          <img
            src={`https://image.tmdb.org/t/p/w1280${serie.poster_path}`}
            alt=''
          />
        </div>
        <div className=''>
          <h1>{serie.title}</h1>
        </div>
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
            <li>Release Date: {serie.release_date}</li>
            <li>Original language: {serie.original_language}</li>
            <li>Popularity: {serie.popularity}</li>
            <li>Overview: {serie.overview}</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SerieDetails;
