import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <Navbar />
        <Search />
      </div>
    </header>
  );
};

export default Header;
