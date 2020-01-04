import React from 'react';
import {connect} from 'react-redux';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import {}
import '../scss/cart-dropdown.scss'

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={CartItem} />
      ))}
    </div>
    <CustomButton> GOT TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps, null)(CartDropdown);