import { RECEIVE_PRODUCT_COMMENTS } from '../actions/product_actions';

const defaultState = {};

const commentReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCT_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}