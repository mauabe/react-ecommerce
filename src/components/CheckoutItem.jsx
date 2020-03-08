import React from 'react';
import '../scss/checkout-item.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../redux/cart/cartActions';
import '../scss/checkout-item.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
  const { name, imageUrl, price, quantity, item} = cartItem;
  return (
    <div className="checkout-item">
      <div className="imageContainer">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
        <div className="value" >{quantity}</div>
        <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
    );
  };

  const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  });
export default connect(null, mapDispatchToProps)(CheckoutItem);
