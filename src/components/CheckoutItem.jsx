import React from 'react';
import '../scss/checkout-item.scss';

const CheckoutItem = ({cartItem: { name, imageUrl, price, quantity}}) => (
  <div className="checkout-item">
    <div className="imageContainer">
      <img src={imageUrl} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
  )
export default CheckoutItem;
