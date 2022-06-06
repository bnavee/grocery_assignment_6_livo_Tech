import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const EmptyOrders = () => {
  const history = useHistory();
  return (
    <div className='emptyOrders'>
      <div>
        No orders yet!
      </div>
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyOrders;
