import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const NavigateFooter = () => {
  const history = useHistory();
  return (
    <>
    <div className='NavFooter'>
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    <button onClick={() => history.push('/cart')}>
      <i className='fas fa-long-arrow-alt-right'></i> Go To Cart
    </button>
  </div>
  </>
  );
};

export default NavigateFooter;
