import * as APIUtil from '../util/user_api_util';

export const RECEIVE_VIEWED_USER = 'RECEIVE_VIEWED_USER';

export const receiveViewedUser = (user) => ({
  type: RECEIVE_VIEWED_USER,
  user
});

export const fetchUser = (userId) => (dispatch) => {
  APIUtil.getUser(userId).then(
    res => (dispatch(receiveViewedUser(res)))
  );
};

export const editUser = (user) => (dispatch) => {
  APIUtil.updateUser(user).then(
    res => dispatch(receiveViewedUser(res))
  );
};