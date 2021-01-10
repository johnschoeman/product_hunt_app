import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { omniSearch } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  let searchTerm = "";
  let userResults = state.entities.searchResults.userResults;
  let productResults = state.entities.searchResults.productResults;
  
  return {
    searchTerm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    omniSearch: (query) => dispatch(omniSearch(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);