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

  switch (action.type) {
    case RECEIVE_PRODUCT:
      let newState = Object.assign({}, defaultState);
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
      return newState;
    case RECEIVE_COMMENT:
      console.log('commentsReducer: ', action);
      return state;
    default:
      return state;
  }
};

export default commentsReducer;