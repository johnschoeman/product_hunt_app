import { RECEIVE_PRODUCT, RECEIVE_ALL_PRODUCTS } from '../actions/product_actions';
import { RECEIVE_UPVOTE, REMOVE_UPVOTE} from '../actions/upvote_actions';
import { merge } from 'lodash';

let defaultState = { byId: {}, allIds: [] };

const productsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let upvote = undefined;
  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState.byId[action.data.productDetails.id] = action.data.productDetails;
      return newState;
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    case RECEIVE_UPVOTE:
      upvote = action.upvote;
      if (upvote.upvoteableType === "Product") {  
        newState.byId[upvote.upvoteableId].currentUserUpvoted = true;
        newState.byId[upvote.upvoteableId].countUpvotes++;
      }
      return newState;
    case REMOVE_UPVOTE:
      upvote = action.upvote;
      if (upvote.upvoteableType === "Product") {
        newState.byId[upvote.upvoteableId].currentUserUpvoted = false;
        newState.byId[upvote.upvoteableId].countUpvotes--;
      }
      return newState;
    default:
      return state;
  }
};

export default productsReducer;