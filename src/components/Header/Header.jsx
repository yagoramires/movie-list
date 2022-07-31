import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';

import './header.css';
import Search from '../Search/Search';
import { useStateContext } from '../../contexts/ContextProvider';

const Header = () => {
  const { setActiveSearch } = useStateContext();

  return (
    <header className='header' onClick={() => setActiveSearch(false)}>
      <Link to='/' className='logo'>
        MOVIESDB
      </Link>
      <div className='header-container'>
        <Link to='/favorites'>
          <MdFavorite
            style={{ color: '#FF00F5', marginTop: '7px' }}
            size={25}
          />
        </Link>
        <Search placeholder={'Search Movie'} classname='header-input' />
      </div>
    </header>
  );
};

export default Header;
