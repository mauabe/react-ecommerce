import {combineReducers} from 'redux';
import useReducer from '.user/userReducer';
import cartReducer from './cart/cartReducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});