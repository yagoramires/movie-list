/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieService from '../api/MovieService';

const SerieDetails = () => {
  const [serie, setSerie] = useState({});
  const [genres, setGenres] = useState();
  const [rate, setRate] = useState();

  const params = useParams();

  const getSerie = async () => {
    const { data } = await MovieService.getSerieDetail(params.id);
    setSerie(data);
    setGenres(data.genres);
    setRate(data.vote_average);
  };

  useEffect(() => {
    getSerie();
  }, []);

  return (
    <main className='details-section'>
      <div className='details-container'>
        <img
          src={`https://image.tmdb.org/t/p/w1280${serie.backdrop_path}`}
          alt={serie.title}
          className='details-image'
        />
        <span className='details-title'>{serie.title}</span>
      </div>

      <ul className='details-list'>
        <li>
          {genres
            ? genres.length > 1
              ? `Genres: ${genres.map((genre) => ` ${genre.name}`)}`
              : `Genre: ${genres.map((genre) => ` ${genre.name}`)}`
            : ''}
        </li>
        <li>Release Date: {serie.release_date}</li>
        <li>Original language: {serie.original_language}</li>
        <li>Rate: {rate ? rate.toFixed(2) : ''}</li>
        <li>Overview: {serie.overview}</li>
      </ul>
    </main>
  );
};

export default SerieDetails;
