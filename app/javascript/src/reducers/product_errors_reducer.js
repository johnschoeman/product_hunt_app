import { RECEIVE_PRODUCT_ERRORS, RECEIVE_PRODUCT, RECEIVE_ALL_PRODUCTS } from '../actions/product_actions';
import { RECEIVE_CLEAR_ERRORS } from '../actions/error_actions';

const productErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    case RECEIVE_PRODUCT:
      return [];
    case RECEIVE_ALL_PRODUCTS:
      return [];
    case RECEIVE_CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default productErrorsReducer;