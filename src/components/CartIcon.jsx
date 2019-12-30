import React from 'react';
import {ReactComponent as ShpppingIcon} from '../assets/shopping-bag.svg';
import '../scss/cart-icon.scss';

const CartIcon = () =>  (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count"> 0</span>
  </div>
)

export default CartIcon;