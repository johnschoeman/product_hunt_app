import { connect } from 'react-redux';
import ProductIndex from './products_index';
import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  let products = state.entities.products.byId;
  let productIds = state.entities.products.allIds;

  return {
    products,
    productIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
