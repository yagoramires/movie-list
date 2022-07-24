import React from 'react';

import { useStateContext } from '../../contexts/ContextProvider';

import MovieService from '../../api/MovieService';
import { Link } from 'react-router-dom';

const Search = ({ classname, placeholder }) => {
  const { searchInput, setSearchInput, results, setResults } =
    useStateContext();

  const searchMovies = async () => {
    const {
      data: { results },
    } = await MovieService.searchMovie(searchInput);

    setResults(results);
  };

  return (
    <>
      <input
        type='text'
        className={classname}
        placeholder={placeholder}
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          searchMovies();
        }}
      />
      <div className='searchResults'>
        {results
          ? results.map((result, i) => {
              return (
                <Link
                  key={i}
                  to={`movie-details/${result.id}`}
                  onClick={() => {
                    setResults('');
                    setSearchInput('');
                  }}
                >
                  {result.title}
                </Link>
              );
            })
          : ''}
      </div>
    </>
  );
};

export default Search;
