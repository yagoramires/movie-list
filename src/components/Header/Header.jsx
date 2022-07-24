import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';

import './header.css';
import Search from '../Search/Search';

const Header = () => {
  return (
    <header className='header'>
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
