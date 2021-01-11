import { connect } from "react-redux"
import { withRouter } from "react-router"
import ProductDetail from "./product_detail"
import { fetchProduct } from "../../actions/product_actions"
import { createUpvote, destroyUpvote } from "../../actions/upvote_actions"

const mapStateToProps = (state, ownProps) => {
  const viewedProductId = ownProps.match.params.productId
  let product = state.entities.products.by_id[viewedProductId]
  if (product === undefined) {
    product = {}
  }
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

