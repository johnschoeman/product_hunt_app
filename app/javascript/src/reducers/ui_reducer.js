import { RECEIVE_VIEWED_USER, RECEIVE_VIEWED_PRODUCT } from '../actions/ui_actions';

const defaultState = {
  viewedUser: null,
  viewedProduct: null
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, defaultState);
  switch (action.type) {
    case RECEIVE_VIEWED_USER:
      newState.viewedUser = action.userId;
      return newState;
    case RECEIVE_VIEWED_PRODUCT:
      newState.viewedProduct = action.productId;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;