import React from "react"
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

  const { currentUserUpvoted, upvotes_count: countUpvotes } = product

  const handleOnClickListItem = () => {
    history.push(`/products/${product.id}`)
  }

  const toggleUpvote = (e) => {
    e.stopPropagation()
    if (currentUserUpvoted) {
      destroyUpvote("Product", product.id)
    } else {
      createUpvote("Product", product.id)
    }
  }

  const commentCount = product.comments_count.toString()
  const upvoteButtonClass = currentUserUpvoted
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
              <i className="fa fa-thumbs-up" size="3x" /> {countUpvotes}
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

