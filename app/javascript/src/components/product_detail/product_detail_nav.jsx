import React from "react"

const ProductDetailNav = ({
  product,
  viewedProductId,
  createUpvote,
  destroyUpvote,
}) => {
  const { currentUserUpvoted, upvotes_count: countUpvotes } = product
  const toggleUpvote = (e) => {
    e.stopPropagation()
    if (currentUserUpvoted) {
      destroyUpvote("Product", viewedProductId)
    } else {
      createUpvote("Product", viewedProductId)
    }
  }

  let linkUrl = product.link_url
  let upvoteButtonClass = currentUserUpvoted
    ? "orange-button"
    : "orange-border-button"
  let upvoteButtonText = currentUserUpvoted ? "UPVOTED" : "UPVOTE"
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
