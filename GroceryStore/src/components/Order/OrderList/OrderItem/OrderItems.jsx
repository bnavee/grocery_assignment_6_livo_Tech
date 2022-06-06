import React from 'react'
import './styles.css'
function OrderItems({ orderDetails }) {
  return (
    <div className='orderItems'>

      {orderDetails.map(item =>
        <div className='item' key={item.id}>
          <img src={item.img} alt='food' />
          <div className='item-head_desc'>
            <p className='head_desc-name'>{item.name}</p>
            <p className='head_desc-info'>
              <small>{item.info}</small>
            </p>
          </div>
          <div className='item-foot_desc'>
            <span className='foot_desc-price'>₹{item.price}</span>
            <div className='orderQty'>
              <span>Qty: {item.quantity}</span>
            </div>
          </div>

        </div>)}
    </div>
  )
}

export default OrderItems