import React from 'react';
import {connect} rom 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../redux/cart/cartSelector';
import {CheckoutItem} from '../components/CheckoutItem';

import '../scss/checkout.scss';

const CheckoutPage = ({cartItems, total}) => {
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Description</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Quantity</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Price</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
}

const mapStateToProps = createStrucuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps, null) CheckoutPage;