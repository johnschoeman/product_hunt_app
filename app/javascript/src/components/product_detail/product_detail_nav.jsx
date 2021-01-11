import React, { useState } from "react"

const ProductDetailNav = ({
  product,
  viewedProductId,
  createUpvote,
  destroyUpvote,
}) => {
  const [userHasUpvoted, setUserHasUpvoted] = useState(
    product.currentUserUpvoted
  )
  const [countUpvotes, setCountUpvotes] = useState(product.countUpvotes || 0)

  const toggleUpvote = (e) => {
    e.stopPropagation()
    if (userHasUpvoted) {
      setUserHasUpvoted(false)
      setCountUpvotes(countUpvotes - 1)
      destroyUpvote("Product", viewedProductId)
    } else {
      setUserHasUpvoted(true)
      setCountUpvotes(countUpvotes + 1)
      createUpvote("Product", viewedProductId)
    }
  }

  let linkUrl = product.link_url
  let upvoteButtonClass = userHasUpvoted
    ? "orange-button"
    : "orange-border-button"
  let upvoteButtonText = userHasUpvoted ? "UPVOTED" : "UPVOTE"
  return (
    <div className="product-detail-nav">
      <div className="product-detail-nav-upvote-container">
        <button
          onClick={toggleUpvote}
          className={`${upvoteButtonClass} large-size`}
          value="Upvote"
        >
          <i className="fa fa-thumbs-up" />
          {upvoteButtonText}
          <div>{countUpvotes}</div>
        </button>
      </div>
      <div className="product-detail-nav-link-container">
        <a href={linkUrl} className="button white-button large-size">
          <div>Website</div>
          <div>{linkUrl}</div>
        </a>
      </div>
    </div>
  )
}

export default ProductDetailNav
