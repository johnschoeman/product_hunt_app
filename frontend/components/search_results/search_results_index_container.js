import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchResultsIndex from './search_results_index';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  let products = state.entities.searchResults.products.byId;
  let productIds = state.entities.searchResults.products.allIds;
  let users = state.entities.searchResults.users.byId;
  let userIds = state.entities.searchResults.users.allIds;
  
  return {
    products,
    productIds,
    users,
    userIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    test: "test"
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultsIndex));