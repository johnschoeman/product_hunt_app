import { connect } from "react-redux"
import { withRouter } from "react-router"
import ProductDetail from "./product_detail"
import { fetchProduct } from "../../actions/product_actions"
import { createUpvote, destroyUpvote } from "../../actions/upvote_actions"

const mapStateToProps = (state, ownProps) => {
  const viewedProductId = ownProps.match.params.productId
  const productsById = state.entities.products.by_id || {}
  const product = productsById[viewedProductId] || {}
  return {
    product,
    viewedProductId,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    createUpvote: (upvoteableType, upvoteableId) =>
      dispatch(createUpvote(upvoteableType, upvoteableId)),
    destroyUpvote: (upvoteableType, upvoteableId) =>
      dispatch(destroyUpvote(upvoteableType, upvoteableId)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
)

