import { combineReducers } from 'redux';
import productsReducer from './products_reducer';

export default combineReducers({
  products: productsReducer
});