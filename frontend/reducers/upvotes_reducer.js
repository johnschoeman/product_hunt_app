import { RECEIVE_UPVOTES, RECEIVE_UPVOTE, REMOVE_UPVOTE } from '../actions/upvote_actions';
import { merge } from 'lodash';

const defaultState = {
  allProductIds: [],
  allCommentIds: []
};

const upvotesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let upvote = undefined;
  switch (action.type) {
    case RECEIVE_UPVOTES:
      console.log('receive_upvotes: ', action);
      newState.byProductIds = action.upvotes.byProductIds;
      newState.byCommentIds = action.upvotes.byCommentIds;
      return newState;
    case RECEIVE_UPVOTE:
      console.log('receive_upvote: ', action);
      upvote = action.upvote;
      if (upvote.upvoteableType === "Product") {
        newState.byProductIds[upvote.upvoteableId] = upvote.id;
      } else if (upvote.upvoteableType ===  "Comment") {
        newState.byCommentIds[upvote.upvoteableId] = upvote.id;
      }
      return newState;
    case REMOVE_UPVOTE:
      upvote = action.upvote;
      if (upvote.upvoteableType === "Product") {
        delete newState.byProductIds[upvote.upvoteableId];
      } else if (upvote.upvoteableType ===  "Comment") {
        delete newState.byCommentIds[upvote.upvoteableId];
      }
      return newState;
    default:
      return state;
  }
};

export default upvotesReducer;