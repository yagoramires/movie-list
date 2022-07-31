/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <h1
        className='section-title'
        style={{ padding: '1rem 0', borderBottom: '1px solid #FF00F5' }}
      >
        Favorites
      </h1>
      {favoritesArr ? (
        favoritesArr.map((movie, i) => {
          return (
            <div key={i} className='favorites__container'>
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt='movie'
                className='favorites__image'
              />
              <div>
                <Link
                  to={`/movie-details/${movie.id}`}
                  className='favorites__title'
                >
                  {movie.title}
                </Link>
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
      ) : (
        <div className='no-fav'>No favorites selected</div>
      )}
    </section>
  );
};

export default Favorites;
