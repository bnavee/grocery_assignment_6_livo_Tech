import React from 'react';
import logo from './logo.jpg';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>eGrocery</b>
      </span>
    </div>
    <p>
      <b>Local Grocery Shop</b>
    </p>
  </div>
);

export default Logo;
