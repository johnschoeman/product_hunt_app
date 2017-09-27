import { search } from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const omniSearch = (query) => dispatch => (
  search(query).then(data => {
    console.log(data);
    dispatch(receiveSearchResults(data));
  })
);