import React from 'react';
import '../scss/checkout-item.scss';
import {connect} from 'react-redux';
import {clearItemFromCart} from '../redux/cart/cartActions';
import '../scss/checkout-item.scss';

const CheckoutItem = ({cartItem, clearItem}) => {
  const { name, imageUrl, price, quantity} = cartItem;
  return (
    <div className="checkout-item">
      <div className="imageContainer">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
    );
  };

  const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
  });
export default connect(null, mapDispatchToProps)(CheckoutItem);
