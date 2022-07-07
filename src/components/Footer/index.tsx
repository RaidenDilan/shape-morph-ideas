import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer" data-testid="footer">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" data-testid="brand-logo-img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
