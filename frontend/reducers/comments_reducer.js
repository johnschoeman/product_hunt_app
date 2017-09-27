import { RECEIVE_PRODUCT, RECEIVE_COMMENT } from '../actions/product_actions';
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
  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState = Object.assign({}, defaultState);
      let comments = Object.values(action.data.comments);

      comments.map( (comment) => {
       if (!comment.parentCommentId) {
         newState.byId[comment.id] = comment;
         newState.allIds.push(comment.id);
         newState.byParentId[comment.id] = [];
       }
      });
      comments.map( (comment) => {
        if (comment.parentCommentId) {
          newState.byId[comment.id] = comment;
          newState.allIds.push(comment.id);
          newState.byParentId[comment.parentCommentId].push(comment);
        }
      });
      newState.allIds.sort((a,b) => {
        if (newState.byId[a].createdAt < newState.byId[b]) {
          return -1;
        } else {
          return 1;
        }
      });
      return newState;
    case RECEIVE_COMMENT:
      console.log('commentsReducer: ', action);
      let comment = action.comment;
      newState.byId[comment.id] = comment;
      newState.allIds.unshift(comment.id);
      newState.byParentId[comment.id] = [];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;