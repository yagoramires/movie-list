import React, { createContext, useContext, useEffect, useState } from 'react';
import MovieService from '../api/MovieService';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [topSeries, setTopSeries] = useState([]);

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
    getPopularMovies();
    getLatestMovies();
    getTvShows();
  }, []);

  return (
    <StateContext.Provider
      value={{
        popular,
        latest,
        topSeries,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
