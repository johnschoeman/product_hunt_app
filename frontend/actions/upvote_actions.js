import * as APIUtil from '../util/upvote_api_util';

export const RECEIVE_UPVOTES = 'RECEIEVE_UPVOTES';
export const RECEIVE_UPVOTE = 'RECEIVE_UPVOTE';
export const REMOVE_UPVOTE = 'REMOVE_UPVOTE';

export const receiveUpvotes = (upvotes) => ({
  type: RECEIVE_UPVOTES,
  upvotes
});

export const receiveUpvote = (upvote) => ({
  type: RECEIVE_UPVOTE,
  upvote
});

export const removeUpvote = (upvote) => ({
  type: REMOVE_UPVOTE,
  upvote
});

export const fetchUpvotes = (userId, upvoteableType) => (dispatch) => {

  return APIUtil.getUpvotes(userId, upvoteableType).then(
    res => {
      return dispatch(receiveUpvotes(res));
    }
  );
};

export const fetchProductDetailUpvotes = (userId, productId) => (dispatch) => {

  return APIUtil.getProductDetailUpvotes(userId, productId).then(
    res => dispatch(receiveUpvotes(res))
  );
};

export const createUpvote = (upvoteableType, upvoteableId) => (dispatch) => {
  return APIUtil.postUpvote(upvoteableType, upvoteableId).then(
    res => (dispatch(receiveUpvote(res)))
  );
};

export const destroyUpvote = (upvoteableType, upvoteableId) => (dispatch) => {
  return APIUtil.deleteUpvote(upvoteableType, upvoteableId).then(
    res => (dispatch(removeUpvote(res)))
  );
};