import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import './Header.scss';

Header.propTypes = {
  user: PropTypes.object,
};

Header.defaultProps = {
  user: {},
}

function Header(props) {
  const { user } = props;

  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar
          className='header__avatar'
          alt={user?.name}
          src={user?.src}
          >
        </Avatar>
        <AccessTimeIcon></AccessTimeIcon>
      </div>
      <div className='header__search'>
        <SearchIcon></SearchIcon>
        <input type="text"/>
      </div>
      <div className='header__right'>
        <HelpOutlineIcon></HelpOutlineIcon>
      </div>
    </div>
  )
}


export default Header;

