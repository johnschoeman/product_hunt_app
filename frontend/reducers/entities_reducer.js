import { combineReducers } from 'redux';
import productsReducer from './products_reducer';
import viewedUserReducer from './viewed_user_reducer';

export default combineReducers({
  products: productsReducer,
  viewedUser: viewedUserReducer
});