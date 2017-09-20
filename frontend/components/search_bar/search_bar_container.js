import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  let searchTerm = "";
  return {
    searchTerm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);