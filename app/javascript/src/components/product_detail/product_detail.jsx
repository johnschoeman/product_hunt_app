import React, { useEffect } from "react"

import ProductDetailHeader from "./product_detail_header"
import ProductDiscussionContainer from "../product_discussion/product_discussion_container"
import ProductDetailNav from "./product_detail_nav"

const ProductDetail = ({
  product,
  viewedProductId,
  fetchProduct,
  createUpvote,
  destroyUpvote,
}) => {
  useEffect(() => {
    fetchProduct(viewedProductId)
  }, [])

  return product ? (
    <div className="product-detail-container">
      <ProductDetailHeader product={product} />
      <div className="product-detail-main-content-container">
        <div className="product-detail-content-bar">
          <div className="product-detail-content-header">
            <h3>DISCUSSION</h3>
          </div>
          <ProductDiscussionContainer
            product={product}
            viewedProductId={viewedProductId}
            fetchProduct={fetchProduct}
          />
        </div>
        <div className="product-detail-aside">
          <ProductDetailNav
            product={product}
            createUpvote={createUpvote}
            destroyUpvote={destroyUpvote}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default ProductDetail

