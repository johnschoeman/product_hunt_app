import {
  RECEIVE_PRODUCT,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../actions/product_actions"
import { RECEIVE_UPVOTE, REMOVE_UPVOTE } from "../actions/upvote_actions"
import { merge } from "lodash"

const defaultState = {
  by_id: {},
  all_ids: [],
  by_parent_id: {},
}

const commentsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  let upvote = undefined
  let comment = undefined
  let comments = undefined

  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState = Object.assign({}, defaultState)
      if (action.data.comments) {
        comments = Object.values(action.data.comments)
      } else {
        comments = []
      }
      comments.map((komment) => {
        if (!komment.parent_comment_id) {
          console.log("no parent", komment.id)
          newState.by_id[komment.id] = komment
          newState.by_parent_id[komment.id] = {}
          newState.by_parent_id[komment.id].by_id = {}
          newState.by_parent_id[komment.id].all_ids = []
        }
      })
      comments.map((komment) => {
        if (komment.parent_comment_id) {
          console.log("has parent", komment)
          newState.by_id[komment.id] = komment
          const parentComment = newState.by_parent_id[komment.parent_comment_id]
          if (parentComment) {
            parentComment.by_id[komment.id] = komment
            parentComment.all_ids.push(komment.id)
          }
        }
      })
      newState.all_ids = action.data.commentIds
      return newState
    case RECEIVE_COMMENT:
      comment = action.comment
      comment.currentUserUpvoted = false
      comment.upvotes_count = 0
      newState.by_id[comment.id] = comment
      newState.all_ids.unshift(comment.id)
      if (!comment.parent_comment_id) {
        newState.by_parent_id[comment.id] = {}
        newState.by_parent_id[comment.id].by_id = {}
        newState.by_parent_id[comment.id].all_ids = []
      } else {
        newState.by_parent_id[comment.parent_comment_id].by_id[
          comment.id
        ] = comment
        newState.by_parent_id[comment.parent_comment_id].all_ids.push(
          comment.id
        )
      }
      return newState
    case REMOVE_COMMENT:
      comment = action.comment
      delete newState.by_id[comment.id]
      let commentIndex = newState.all_ids.indexOf(comment.id)
      if (commentIndex > -1) {
        newState.all_ids.splice(commentIndex, 1)
      }
      if (!comment.parent_comment_id) {
        delete newState.by_parent_id[comment.id]
      } else {
        delete newState.by_parent_id[comment.parent_comment_id].by_id[
          comment.id
        ]
        commentIndex = newState.by_parent_id[
          comment.parent_comment_id
        ].all_ids.indexOf(comment.id)
        if (commentIndex > -1) {
          newState.by_parent_id[comment.parent_comment_id].all_ids.splice(
            commentIndex,
            1
          )
        }
      }
      return newState
    case RECEIVE_UPVOTE:
      upvote = action.upvote
      comment = action.upvote.upvoteable
      if (upvote.upvoteable_type === "Comment") {
        if (!comment.parent_comment_id) {
          newState.by_id[upvote.upvoteable_id].currentUserUpvoted = true
          newState.by_id[upvote.upvoteable_id].upvotes_count++
        } else {
          newState.by_parent_id[comment.parent_comment_id].by_id[
            upvote.upvoteable_id
          ].currentUserUpvoted = true
          newState.by_parent_id[comment.parent_comment_id].by_id[
            upvote.upvoteable_id
          ].upvotes_count++
        }
      }
      return newState
    case REMOVE_UPVOTE:
      upvote = action.upvote
      comment = action.upvote.upvoteable
      if (upvote.upvoteable_type === "Comment") {
        if (!comment.parent_comment_id) {
          newState.by_id[upvote.upvoteable_id].currentUserUpvoted = false
          newState.by_id[upvote.upvoteable_id].upvotes_count--
        } else {
          newState.by_parent_id[comment.parent_comment_id].by_id[
            upvote.upvoteable_id
          ].currentUserUpvoted = false
          newState.by_parent_id[comment.parent_comment_id].by_id[
            upvote.upvoteable_id
          ].upvotes_count--
        }
      }
      return newState
    default:
      return state
  }
}

export default commentsReducer

