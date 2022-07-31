import React, { createContext, useContext, useEffect, useState } from 'react';
import MovieService from '../api/MovieService';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [results, setResults] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);

  const getPopularMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getPopularMovies();

    setPopular(results);
  };

  const getLatestMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getLatestMovies();

    setLatest(results);
  };

  const getTvShows = async () => {
    const {
      data: { results },
    } = await MovieService.getTvShows();

    setTopSeries(results);
  };

  useEffect(() => {
    const data = localStorage.getItem('movies');
    if (data !== null) setFavorites(JSON.parse(data));
    getPopularMovies();
    getLatestMovies();
    getTvShows();
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <StateContext.Provider
      value={{
        popular,
        latest,
        topSeries,
        searchInput,
        setSearchInput,
        results,
        setResults,
        setFavorites,
        favorites,
        setActiveSearch,
        activeSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
