import React, { useState } from "react"
import { withRouter } from "react-router"
import CommentForm from "./product_discussion_comment_form"
import i from "react-fontawesome"

const CommentItem = ({
  history,
  comment,
  className,
  currentUser,
  productId,
  parentCommentId,
  createComment,
  destroyComment,
  createUpvote,
  destroyUpvote,
}) => {
  const [replyFormShown, setReplyFormShown] = useState(false)

  const redirectToUser = (userId) => {
    return (e) => {
      history.push(`/users/${userId}`)
    }
  }

  const toggleUpvote = (e) => {
    e.stopPropagation()
    if (comment.currentUserUpvoted) {
      destroyUpvote("Comment", comment.id)
    } else {
      createUpvote("Comment", comment.id)
    }
  }

  const toggleReplyForm = () => {
    setReplyFormShown(!replyFormShown)
  }

  const handleDelete = () => {
    destroyComment(comment.id)
  }

  let commentBody = comment.body.replace(/\n/g, "<br/>")
  let countUpvotes = comment.count_upvotes
  let imageUrl = comment.user.imageUrl
  let user = comment.user

  let commentForm = undefined
  let commentActions = undefined
  let deleteButton = undefined

  let upvotedClass = comment.currentUserUpvoted ? "orange-link-button" : ""

  if (currentUser) {
    commentForm = (
      <CommentForm
        user={currentUser}
        classProp={"reply-form"}
        commentId={comment.id}
        productId={productId}
        createComment={createComment}
        parentCommentId={parentCommentId}
        toggleReplyForm={toggleReplyForm}
      />
    )

    if (currentUser.id === user.id) {
      deleteButton = (
        <button
          className="link-button comment-delete-button"
          onClick={handleDelete}
        >
          <a>Delete</a>
        </button>
      )
    }

    commentActions = (
      <div className="comment-actions">
        <div className="comment-upvote-button">
          <button
            onClick={toggleUpvote}
            className={`link-button upvotes  ${upvotedClass}`}
          >
            <i className="fa fa-thumbs-up" aria-hidden="true" />
            <a>Upvote</a>
            <p>{`(${countUpvotes})`}</p>
          </button>
        </div>
        <div className="comment-reply-button">
          <button onClick={toggleReplyForm} className={`link-button`}>
            <i className="fa fa-reply" aria-hidden="true" />
            <a>Reply</a>
          </button>
          {deleteButton}
        </div>
      </div>
    )
  } else {
    commentActions = (
      <div className="comment-actions">
        <div className="comment-upvote-button">
          <button onClick={openLogin} className="link-button upvotes">
            <i className="fa fa-thumbs-up" aria-hidden="true" />
            <a>Upvote</a>
            <p>{`(${countUpvotes})`}</p>
          </button>
        </div>
      </div>
    )
  }

  let replyForm = undefined
  if (replyFormShown) {
    replyForm = (
      <div className="reply-form" id={`reply-form-${comment.id}`}>
        {commentForm}
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="user-spotlight">
        <div
          className="user-profile-img-container"
          onClick={redirectToUser(user.id)}
        >
          <img className="user-profile-img" src={imageUrl} />
        </div>
        <div className="user-spotlight-content">
          <div
            className="user-spotlight-username"
            onClick={redirectToUser(user.id)}
          >
            {user.username}
          </div>
          <div className="user-spotlight-headline">{user.headline}</div>
        </div>
      </div>

      <div className="comment-body">
        {comment.body.split("\n").map((line, idx) => (
          <span key={`comment-line-${comment.id}-${idx}`}>
            {line}
            <br />
          </span>
        ))}
      </div>

      {commentActions}

      {replyForm}
    </div>
  )
}

export default withRouter(CommentItem)

