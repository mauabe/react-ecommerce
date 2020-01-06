import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import {selectCartItems} from '../redux/cart/cartSelector';
import {toggleCartHidden} from '../redux/cart/cartActions'

import '../scss/cart-dropdown.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
  cartItems ?
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={CartItem} />
      ))}
    </div>
    : <span className="empty-message" >Your Cart is Empty  </span>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
      }}> GOT TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));