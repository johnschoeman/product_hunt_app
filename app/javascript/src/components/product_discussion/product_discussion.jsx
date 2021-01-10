import React from "react"
import Thread from "./product_discussion_thread"
import CommentForm from "./product_discussion_comment_form"

const ProductDiscussion = ({
  commentsById,
  commentIds,
  childComments,
  currentUser,
  productId,
  createComment,
  destroyComment,
  createUpvote,
  destroyUpvote,
}) => {
  return (
    <div className="product-discussion">
      {currentUser && (
        <CommentForm
          user={currentUser}
          showIcon={true}
          classProp={"new-comment-form"}
          productId={productId}
          createComment={createComment}
        />
      )}
      <div>
        {commentIds.map((commentId) => {
          let comment = commentsById[commentId]
          if (!comment.parent_comment_id) {
            return (
              <Thread
                key={`discussion-thread-${comment.id}`}
                comment={comment}
                childComments={childComments[commentId]}
                currentUser={currentUser}
                productId={productId}
                createComment={createComment}
                destroyComment={destroyComment}
                createUpvote={createUpvote}
                destroyUpvote={destroyUpvote}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default ProductDiscussion

