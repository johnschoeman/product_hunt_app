import { connect } from 'react-redux';
import ProductIndex from './products_index';

const mapStateToProps = (state, ownProps) => {
  let products = state.entities.products.by_id;
  return {
    products
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
