import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';

import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        YAGOFLIX
      </Link>
      <div className='header-container'>
        <Link to='/favorites'>
          <MdFavorite
            style={{ color: '#FF00F5', marginTop: '7px' }}
            size={25}
          />
        </Link>
        <input
          type='text'
          className='header-input'
          placeholder='Search Movies'
        />
      </div>
    </header>
  );
};

export default Header;
