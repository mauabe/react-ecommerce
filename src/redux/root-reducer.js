import {combineReducers} from 'redux';
import useReducer from '.user/userReducer';

export default combineReducers({
  user: userReducer
});