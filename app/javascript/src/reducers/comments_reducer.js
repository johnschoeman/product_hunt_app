import { RECEIVE_PRODUCT, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/product_actions';
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
  let comments = undefined;

  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState = Object.assign({}, defaultState);
      if (action.data.comments) {
        comments = Object.values(action.data.comments);
      } else {
        comments = [];
      }
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
      comment.currentUserUpvoted = false;
      comment.countUpvotes = 0;
      newState.byId[comment.id] = comment;
      newState.allIds.unshift(comment.id);
      if (!comment.parentCommentId) {
        newState.byParentId[comment.id] = {};
        newState.byParentId[comment.id].byId = {};
        newState.byParentId[comment.id].allIds = [];
      } else {
        newState.byParentId[comment.parentCommentId].byId[comment.id] = comment;
        newState.byParentId[comment.parentCommentId].allIds.push(comment.id);
      }
      return newState;
    case REMOVE_COMMENT:
      comment = action.comment;
      delete newState.byId[comment.id];
      let commentIndex = newState.allIds.indexOf(comment.id);
      if (commentIndex > -1) {
        newState.allIds.splice(commentIndex, 1);
      }
      if (!comment.parentCommentId) {
        delete newState.byParentId[comment.id];
      } else {
        delete newState.byParentId[comment.parentCommentId].byId[comment.id];
        commentIndex = newState.byParentId[comment.parentCommentId].allIds.indexOf(comment.id);
        if (commentIndex > -1) {
          newState.byParentId[comment.parentCommentId].allIds.splice(commentIndex, 1);
        }
      }
      return newState;
    case RECEIVE_UPVOTE: 
      upvote = action.upvote;
      comment = action.upvote.upvoteable;
      if (upvote.upvoteableType === "Comment") {
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
      if (upvote.upvoteableType === "Comment") {
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