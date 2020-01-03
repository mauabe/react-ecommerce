import React from 'react';
import {connect} from 'react-redux';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import '../scss/cart-dropdown.scss'

const Cart = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItem.map(cartItem => (
        <CartItem key={cartItem.id} item={CartItem} />
      ))}
    </div>
    <CustomButton> GOT TO CHECKOUT</CustomButton>
  </div>
)

mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})



export default CartDropdown;