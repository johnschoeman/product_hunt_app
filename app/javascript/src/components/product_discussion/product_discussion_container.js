import { connect } from "react-redux"
import { withRouter } from "react-router"
import ProductDiscussion from "./product_discussion"
import { createComment, destroyComment } from "../../actions/product_actions"
import { createUpvote, destroyUpvote } from "../../actions/upvote_actions"

const mapStateToProps = (state, ownProps) => {
  let commentsById = {}
  let childComments = {}
  let commentIds = []
  let currentUser = state.session.currentUser
  let productId = ownProps.match.params.productId

  if (state.entities.comments) {
    commentsById = state.entities.comments.by_id
    commentIds = state.entities.comments.all_ids
    childComments = state.entities.comments.by_parent_id
  }

  return {
    commentsById,
    commentIds,
    childComments,
    currentUser,
    productId,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    destroyComment: (commentId) => dispatch(destroyComment(commentId)),
    createUpvote: (upvoteableType, upvoteableId) =>
      dispatch(createUpvote(upvoteableType, upvoteableId)),
    destroyUpvote: (upvoteableType, upvoteableId) =>
      dispatch(destroyUpvote(upvoteableType, upvoteableId)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDiscussion)
)

