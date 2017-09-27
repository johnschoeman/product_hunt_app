import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { omniSearch } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  let searchTerm = "";
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