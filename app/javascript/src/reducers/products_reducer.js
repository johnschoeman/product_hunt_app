import {
  RECEIVE_PRODUCT,
  RECEIVE_ALL_PRODUCTS,
} from "../actions/product_actions"
import { RECEIVE_UPVOTE, REMOVE_UPVOTE } from "../actions/upvote_actions"
import { merge } from "lodash"

let defaultState = { by_id: {}, all_ids: [] }

const productsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  let upvote = undefined
  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState.by_id[action.data.productDetails.id] = action.data.productDetails
      return newState
    case RECEIVE_ALL_PRODUCTS:
      return action.products
    case RECEIVE_UPVOTE:
      upvote = action.upvote
      if (upvote.upvoteable_type === "Product") {
        newState.by_id[upvote.upvoteable_id].currentUserUpvoted = true
        newState.by_id[upvote.upvoteable_id].upvotes_count++
      }
      return newState
    case REMOVE_UPVOTE:
      upvote = action.upvote
      if (upvote.upvoteable_type === "Product") {
        newState.by_id[upvote.upvoteable_id].currentUserUpvoted = false
        newState.by_id[upvote.upvoteable_id].upvotes_count--
      }
      return newState
    default:
      return state
  }
}

export default productsReducer

