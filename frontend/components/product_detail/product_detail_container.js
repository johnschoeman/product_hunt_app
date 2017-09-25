import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDetail from './product_detail';
import { fetchProduct } from '../../actions/product_actions';
import { setViewedProduct } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const viewedProductId = ownProps.match.params.productId;
  let product = state.entities.products.byId[viewedProductId];
  if (product === undefined) {
    product = {};
  }
  return {
    product,
    viewedProductId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchProduct: (productId) => (dispatch(fetchProduct(productId))),
    setViewedProduct: (productId) => (dispatch(setViewedProduct(productId)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetail));