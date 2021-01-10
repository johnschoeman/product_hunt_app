import { connect } from "react-redux"
import ProductIndex from "./products_index"
import { fetchAllProducts } from "../../actions/product_actions"
import {
  fetchUpvotes,
  createUpvote,
  destroyUpvote,
} from "../../actions/upvote_actions"

const mapStateToProps = (state, ownProps) => {
  let products = state.entities.products.by_id
  let productIds = state.entities.products.all_ids
  let currentUser = state.session.currentUser

  return {
    products,
    productIds,
    currentUser,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    fetchUpvotes: (userId, upvoteableType) =>
      dispatch(fetchUpvotes(userId, upvoteableType)),
    createUpvote: (upvoteableType, upvoteableId) =>
      dispatch(createUpvote(upvoteableType, upvoteableId)),
    destroyUpvote: (upvoteableType, upvoteableId) =>
      dispatch(destroyUpvote(upvoteableType, upvoteableId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)
