import { RECEIVE_PRODUCT } from '../actions/product_actions';

const defaultState = {};

const commentsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      return action.data.comments;
    default:
      return state;
  }
};

export default commentsReducer;