import React, { useState } from "react"
import { withRouter } from "react-router"
import i from "react-fontawesome"

const ProductIndexItem = ({
  history,
  product,
  createUpvote,
  destroyUpvote,
}) => {
  if (product === undefined) {
    return
  }

  const [upvoteCount, setUpvoteCount] = useState(product.count_upvotes)
  const [userHasUpvoted, setUserHasUpvoted] = useState(
    Boolean(product.currentUserUpvoted)
  )

  const handleOnClickListItem = () => {
    history.push(`/products/${product.id}`)
  }

  const toggleUpvote = (e) => {
    e.stopPropagation()
    if (userHasUpvoted) {
      setUpvoteCount(upvoteCount - 1)
      setUserHasUpvoted(false)
      destroyUpvote("Product", product.id)
    } else {
      setUpvoteCount(upvoteCount + 1)
      setUserHasUpvoted(true)
      createUpvote("Product", product.id)
    }
  }

  const commentCount = product.count_comments.toString()
  const upvoteButtonClass = userHasUpvoted
    ? "orange-button small-size"
    : "white-button small-size"

  return (
    <li className="product-index-item" onClick={handleOnClickListItem}>
      <div className="product-index-item-img">
        <img src={product.thumbnailUrl} />
      </div>

      <div className="product-index-item-text">
        <p className="product-name">{product.name}</p>
        <p className="product-tagline">{product.tagline}</p>
        <div className="product-item-buttons">
          <div className="product-item-tags"></div>
          <div className="product-item-minor-actions">
            <button className={upvoteButtonClass} onClick={toggleUpvote}>
              <i className="fa fa-thumbs-up" size="3x" /> {upvoteCount}
            </button>
            <button
              className="white-button small-size gray-text"
              onClick={handleOnClickListItem}
            >
              <i className="fa fa-comment" /> {commentCount}
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default withRouter(ProductIndexItem)

