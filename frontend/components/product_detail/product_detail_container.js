import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDetail from './product_detail';
import { fetchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  // const product = state.entities.products[state.ui.viewedProduct];
  let product = { thumbnailUrl: "test_url", name: "product detail test", tagline: "tagline" };
  return {
    product
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchProduct: (productId) => (dispatch(fetchProduct(productId)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetail));