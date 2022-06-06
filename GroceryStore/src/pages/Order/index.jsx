import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyOrders from '../../components/Order/EmptyOrders';
import NavigateFooter from '../../components/Order/NavigateFooter';
import Logo from '../../components/common/Logo';
import {
  selectOrderItems,
  selectOrderItemsCount,
  selectOrderTotal,
} from '../../redux/order/order.selector';
import OrderList from '../../components/Order/OrderList';

const Order = ({ orderCount, orderList, orderTotal }) => {
  return (
    <>
      <div className='order-header'>
        <Logo />
      </div>
      {orderCount === 0 ? (
        <EmptyOrders />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <OrderList orderList={orderList} />
          </div>
          <NavigateFooter />
        </div>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  orderCount: selectOrderItemsCount,
  orderList: selectOrderItems,
  orderTotal: selectOrderTotal,
});

export default connect(mapStateToProps)(Order);
