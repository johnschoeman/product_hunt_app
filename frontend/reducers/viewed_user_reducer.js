import { RECEIVE_VIEWED_USER } from '../actions/user_actions';

let defaultState = { id: 1,
                     username: "",
                     headline: "",
                     imageUrl: "https://res.cloudinary.com/dekgrddbo/image/upload/v1506267278/finn_the_human_bokynk.jpg",
                     userslug: "" };

const viewedUserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_VIEWED_USER:
      let newValue = undefined;
      Object.keys(action.user).forEach((key) => {
        newValue = action.user[key];
        if (newValue !== "") {
          newState[key] = action.user[key];
        }
      });
      return newState;
    default:
      return state;
  }
};

export default viewedUserReducer;