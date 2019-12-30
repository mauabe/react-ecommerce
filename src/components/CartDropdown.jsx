import React from 'react';
import CustomBUtton from './CustomButton';
import '../scss/cart-dropdown.scss';

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton> GOT TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;