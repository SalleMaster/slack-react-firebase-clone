import React from 'react';
import '../style/Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <Avatar className='header-avatar' alt='Sasa Radovanovic' src='' />
        <AccessTimeIcon />
        {/* Avatar for logged-in user */}
        {/* Tome icon */}
      </div>
      <div className='header-search'>
        {/* Search icon */}
        <SearchIcon />
        {/* Input */}
        <input type='text' placeholder='Search Clever Programmer' />
      </div>
      <div className='header-right'>
        {/* Help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
