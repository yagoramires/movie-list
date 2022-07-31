/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import MovieService from '../api/MovieService';
import { useStateContext } from '../contexts/ContextProvider';

import './favorites.css';

const Favorites = () => {
  const { favorites, setFavorites } = useStateContext();

  const [favoritesArr, setFavoritesArr] = useState();

  useEffect(() => {
    handleData();
  }, [favorites]);

  const handleData = async () => {
    let moviesArr = [];
    favorites.forEach((movie) => {
      moviesArr.push(getMovieDetail(movie));
    });

    const favoritesArray = await Promise.all(moviesArr);
    setFavoritesArr(favoritesArray);
  };

  const getMovieDetail = async (movie) => {
    const { data } = await MovieService.getMovieDetail(movie);
    return data;
  };

  const handleRemove = (movieID) => {
    let newFavorites = favorites.filter((favorite) => {
      return favorite !== movieID;
    });

    setFavorites(newFavorites);
  };

  return (
    <section className='favorites'>
      {favoritesArr
        ? favoritesArr.map((movie, i) => {
            return (
              <div key={i} className='favorites__container'>
                <img
                  src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                  alt='movie'
                  className='favorites__image'
                />
                <div>
                  <p className='favorites__title'>{movie.title}</p>
                  <button
                    className='favorites__button'
                    onClick={() => handleRemove(movie.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        : ''}
    </section>
  );
};

export default Favorites;
