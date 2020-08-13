import React from 'react';
import '../style/Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../context/StateProvider';

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='header'>
      <div className='header-left'>
        <Avatar
          className='header-avatar'
          alt={user?.displayName}
          src={user?.photoURL}
        />
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
