import { RECEIVE_PRODUCT, RECEIVE_ALL_PRODUCTS } from '../actions/product_actions';
import { merge } from 'lodash';

let defaultState = { byId: {}, allIds: [] };

const productsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState.byId[action.product.id] = action.product;
      return newState;
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;