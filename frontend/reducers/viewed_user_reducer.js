import { RECEIVE_VIEWED_USER } from '../actions/user_actions';

let defaultState = { id: 1,
                     username: "null_user",
                     tagline: "null_user_tagline",
                     image_url: "https://res.cloudinary.com/dekgrddbo/image/upload/v1506267278/finn_the_human_bokynk.jpg",
                     twitter_handle: "null_user_twitter" };

const viewedUserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_VIEWED_USER:
      Object.keys(action.user).forEach((key) => {
        newState[key] = action.user[key];
      });
      return newState;
    default:
      return state;
  }
};

export default viewedUserReducer;