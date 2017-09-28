import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDetail from './product_detail';
import { fetchProduct } from '../../actions/product_actions';
import { setViewedProduct } from '../../actions/ui_actions';
import { fetchProductDetailUpvotes, createUpvote, destroyUpvote } from '../../actions/upvote_actions';

const mapStateToProps = (state, ownProps) => {
  const viewedProductId = ownProps.match.params.productId;
  let product = state.entities.products.byId[viewedProductId];
  let userUpvotes = state.entities.upvotes.byCommentIds;
  let currentUser = state.session.currentUser;
  if (product === undefined) {
    product = {};
  }
  return {
    product,
    viewedProductId,
    userUpvotes,
    currentUser
  };



};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchProduct: (productId) => (dispatch(fetchProduct(productId))),
    setViewedProduct: (productId) => (dispatch(setViewedProduct(productId))),
    fetchProductDetailUpvotes: (userId, upvoteableType) => dispatch(fetchProductDetailUpvotes(userId, upvoteableType)),
    createUpvote: (upvoteableType, upvoteableId) => dispatch(createUpvote(upvoteableType, upvoteableId)),
    destroyUpvote: (upvoteId) => dispatch(destroyUpvote(upvoteId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetail));