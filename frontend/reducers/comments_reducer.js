import { RECEIVE_PRODUCT, RECEIVE_COMMENT } from '../actions/product_actions';
import { RECEIVE_UPVOTE, REMOVE_UPVOTE } from '../actions/upvote_actions';
import { merge } from 'lodash';

const defaultState = {
    byId: {
    },
    allIds: [],
    byParentId: {}
  };

const commentsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let upvote = undefined;
  let comment = undefined;
  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState = Object.assign({}, defaultState);
      let comments = Object.values(action.data.comments);

      comments.map( (komment) => {
       if (!komment.parentCommentId) {
         newState.byId[komment.id] = komment;
         newState.byParentId[komment.id] = {};
         newState.byParentId[komment.id].byId = {};
         newState.byParentId[komment.id].allIds = [];
       }
      });
      comments.map( (komment) => {
        if (komment.parentCommentId) {
          newState.byId[komment.id] = komment;
          newState.byParentId[komment.parentCommentId].byId[komment.id] = komment;
          newState.byParentId[komment.parentCommentId].allIds.push(komment.id);
        }
      });
      newState.allIds = action.data.commentIds;
      return newState;
    case RECEIVE_COMMENT:
      comment = action.comment;
      newState.byId[comment.id] = comment;
      newState.allIds.unshift(comment.id);
      if (!comment.parentCommentId) {
        newState.byParentId[comment.id] = [];
      } else {
        newState.byParentId[comment.parentCommentId].unshift(comment);
      }
      return newState;
    case RECEIVE_UPVOTE: 
      upvote = action.upvote;
      comment = action.upvote.upvoteable;
      if (upvote.upvoteableType === "Comment") {
        console.log(newState.byId[upvote.upvoteableId]);
        if (!comment.parentCommentId) {
          newState.byId[upvote.upvoteableId].currentUserUpvoted = true;
          newState.byId[upvote.upvoteableId].countUpvotes++;
        } else {
          newState.byParentId[comment.parentCommentId].byId[upvote.upvoteableId].currentUserUpvoted = true;
          newState.byParentId[comment.parentCommentId].byId[upvote.upvoteableId].countUpvotes++;
        }
      }
      return newState;
    case REMOVE_UPVOTE:
      upvote = action.upvote;
      comment = action.upvote.upvoteable;
      console.log('comment', comment);
      if (upvote.upvoteableType === "Comment") {
        console.log(newState.byId[upvote.upvoteableId]);
        if (!comment.parentCommentId) {
          newState.byId[upvote.upvoteableId].currentUserUpvoted = false;
          newState.byId[upvote.upvoteableId].countUpvotes--;
        } else {
          newState.byParentId[comment.parentCommentId].byId[upvote.upvoteableId].currentUserUpvoted = false;
          newState.byParentId[comment.parentCommentId].byId[upvote.upvoteableId].countUpvotes--;
        }
      }
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;