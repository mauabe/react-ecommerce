import {createSelector} from 'reselect';
import {toggleCartHidden} from '../cart/cartActions'
import {connect} from 'react-redux';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price , 0)
);


const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden:  dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(selectCart);