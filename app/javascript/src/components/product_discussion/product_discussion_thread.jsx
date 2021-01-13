import React from "react"
import CommentItem from "./product_discussion_comment_item"

const Thread = ({
  comment,
  childComments,
  currentUser,
  productId,
  createComment,
  destroyComment,
  createUpvote,
  destroyUpvote,
}) => {
  const childCommentsAllIds = childComments.all_ids
  const childCommentsById = childComments.by_id

  return (
    <div className="thread">
      <CommentItem
        comment={comment}
        className={`comment`}
        currentUser={currentUser}
        productId={productId}
        parentCommentId={comment.id}
        createComment={createComment}
        destroyComment={destroyComment}
        createUpvote={createUpvote}
        destroyUpvote={destroyUpvote}
      />
      {childCommentsAllIds.map((childCommentId) => {
        return (
          <CommentItem
            comment={childCommentsById[childCommentId]}
            key={`child-comment-${childCommentId}`}
            className={`child-comment`}
            currentUser={currentUser}
            productId={productId}
            parentCommentId={comment.id}
            createComment={createComment}
            destroyComment={destroyComment}
            createUpvote={createUpvote}
            destroyUpvote={destroyUpvote}
          />
        )
      })}
    </div>
  )
}

export default Thread

