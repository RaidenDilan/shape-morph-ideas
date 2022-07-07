import React from 'react';

import { Page } from '../../types/Page';
import isBrowser from '../../utils/isBrowser';
import logo from '../../assets/images/logo.svg';

import './Header.scss';

const Header = () => {
  const navigateToHome = (url: string) => {
    if (isBrowser()) window.location.href = url;
  };

  return (
    <div className="Header" data-testid="header">
      <div className="navbar">
        <div className="container">
          <a onClick={() => navigateToHome(Page.main)}>
            <img
              data-testid="brand-logo-img"
              className="brand-logo-img"
              src={logo}
              alt="TMDB Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
