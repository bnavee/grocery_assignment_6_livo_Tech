import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import NavigateFooter from '../../components/Cart/NavigateFooter';
import ButtonPlaceOrder from '../../components/Cart/ButtonPlaceOrder';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import ButtonOrderCount from '../../components/common/ButtonOrderCount';
//import MenuItem from '../../components/common/Menu/MenuItem';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styles.css';
import { placeOrder } from '../../redux/cart/cart.action';
import { orderAddItem } from '../../redux/order/order.action';

const Cart = ({ cartCount, cartList, cartTotal, placeOrder, orderAddItem }) => {
  const handlePlaceOrder = () => {
    orderAddItem(cartList, cartTotal);
    placeOrder();
  }
  return (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='cart-list'>
          <h1 className='cart-heading'>Your Cart</h1>
          <div className='cart-menu'>
            <Menu list={cartList} />
          </div>
          <h3 className='cart-total'>Your Total ₹{cartTotal}</h3>
          <ButtonPlaceOrder handlePlaceOrder={handlePlaceOrder} />
          <NavigateFooter />
        </div>

      )}

      <ButtonOrderCount />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  placeOrder: (item) => dispatch(placeOrder(item)),
  orderAddItem: (item, total) => dispatch(orderAddItem(item, total)),
});

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
