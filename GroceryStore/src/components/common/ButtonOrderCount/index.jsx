import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectOrderItemsCount } from '../../../redux/order/order.selector';
import './styles.css';

const ButtonOrderCount = ({ orderCount }) => {
  const history = useHistory();
  return (
    <div className='btnOrderCount' onClick={() => history.push('/orders')}>
      Orders
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  orderCount: selectOrderItemsCount,
});

export default connect(mapStateToProps)(ButtonOrderCount);
