import React from "react"
import { withRouter } from "react-router"
import i from "react-fontawesome"

const ProductIndexItem = ({
  history,
  product,
  createUpvote,
  destroyUpvote,
}) => {
  const handleClick = (e) => {
    history.push(`/products/${product.id}`)
  }

  const toggleUpvote = (e) => {
    e.stopPropagation()
    if (product.currentUserUpvoted) {
      destroyUpvote("Product", product.id)
    } else {
      createUpvote("Product", product.id)
    }
  }

  const commentCount = product.count_comments.toString()
  const upvoteCount = product.count_upvotes.toString()
  const upvoteButtonClass = product.currentUserUpvoted
    ? "orange-button small-size"
    : "white-button small-size"

  return (
    <li className="product-index-item" onClick={handleClick}>
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
              onClick={handleClick}
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

