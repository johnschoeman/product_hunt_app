import { combineReducers } from 'redux';
import productsReducer from './products_reducer';
import viewedUserReducer from './viewed_user_reducer';
import commentsReducer from './comments_reducer';
import searchResultsReducer from './search_results_reducer';
import upvotesReducer from './upvotes_reducer';

export default combineReducers({
  products: productsReducer,
  viewedUser: viewedUserReducer,
  comments: commentsReducer,
  searchResults: searchResultsReducer,
  upvotes: upvotesReducer
});