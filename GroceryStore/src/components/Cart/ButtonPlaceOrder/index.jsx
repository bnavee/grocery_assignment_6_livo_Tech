import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const ButtonPlaceOrder = ({handlePlaceOrder}) => {
  const history = useHistory();
  const handlePlaceOrderClick = () => {
    history.push('/orders');
    handlePlaceOrder()
  }
  return (
    <div className='placeOrderBtn'>
      <button onClick={handlePlaceOrderClick}>
        <i className='fas fa-shopping-bag'></i> Place Order
      </button>
    </div>
  );
};

export default ButtonPlaceOrder;
