import { search } from '../util/search_api_util';

export const omniSearch = (query) => dispatch => (
  search(query).then(data => console.log(data))
);