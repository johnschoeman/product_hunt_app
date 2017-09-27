import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchResultsIndex from './search_results_index';

const mapStateToProps = (state, ownProps) => {

  return {
    searchResults: state.entities.searchResults
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    test: "test"
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultsIndex));