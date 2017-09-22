import { connect } from 'react-redux';
import ProductIndex from './products_index';

const mapStateToProps = (state, ownProps) => {
  let products = state.entities.products.byId;
  let productIds = state.entities.products.allIds;
  console.log('state', state);
  console.log('productIds', productIds);
  return {
    products,
    productIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
