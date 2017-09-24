import { RECEIVE_VIEWED_USER } from '../actions/user_actions';

let defaultState = { }

const viewedUserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIEWED_USER:
      return action.user;
    default:
      return state;
  }
};

export default viewedUserReducer;