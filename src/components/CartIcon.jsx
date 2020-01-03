import React from 'react';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cartActions';
import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg';
import '../scss/cart-icon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) =>  (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
<span className="item-count"> {itemCount}0</span>
  </div>
)
const mapStateToProps = ({cart: {cartItems}}) => ({
  itemCount: cartItems.reduce((accumulatedQuantity, cartItem ) => accumulatedQuantity + cartItem.quantity, 0)
})
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect( mapStateToProps, mapDispatchToProps)(CartIcon);