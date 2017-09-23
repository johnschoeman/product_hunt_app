import { RECEIVE_VIEWED_USER } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIEWED_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;