import { RECEIVE_PRODUCT } from '../actions/product_actions';
import { merge } from 'lodash';

const defaultState = {};

const commentsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      let newState = {};
      let comments = Object.values(action.data.comments);
      comments.map( (comment) => {
       if (!comment.parentCommentId) {
         newState[comment.id] = comment;
         newState[comment.id].childComments = {};
       }
      });
      comments.map( (comment) => {
        if (comment.parentCommentId) {
          newState[comment.parentCommentId].childComments[comment.id] = comment; 
        }
      });
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;