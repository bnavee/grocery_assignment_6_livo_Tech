import React from 'react'
import OrderItems from './OrderItem/OrderItems';
import './styles.css'

function OrderList({ orderList }) {
  return (

    orderList.map(orderDetails =>
      <div className='order-list'>
        <div><b>Order ID: </b>{orderDetails.id}</div>
        <div className='orderHeader'>
        </div>
        <OrderItems orderDetails={orderDetails.items} key={orderDetails.id} />
        <h3 className='order-total'>Your Total ₹{orderDetails.orderTotal}</h3>
      </div>
    )
  )
}

export default OrderList;