import React, { useState } from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom';
import {
  AppsSharp,
  Notifications,
  SearchSharp,
  VideoCallSharp,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';

import './Header.css';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharp className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallSharp className="header__icon" />
        <AppsSharp className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar
          src="https://lh3.googleusercontent.com/a/AGNmyxZDt1T6nmrCZNXdEtKqutQmGGy_iFU4LP3JvDy6WQ=s288"
          alt="Olek Smyrnov"
        />
      </div>
    </div>
  );
};

export default Header;
