import React from 'react';
import {connect} from 'react-redux';
import {} from '../redux/cart/cartActions';
import {ReactComponent as ShpppingIcon} from '../assets/shopping-bag.svg';
import '../scss/cart-icon.scss';

const CartIcon = ({toggleCartHidden}) =>  (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count"> 0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect( null, mapDispatchToProps)(CartIcon);