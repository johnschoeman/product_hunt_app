import React, { useState, useEffect } from "react"
import ProductIndexItem from "./product_index_item"
import { GridLoader } from "react-spinners"

const ProductIndex = ({
  userUpvotes,
  createUpvote,
  destroyUpvote,
  products,
  productIds,
  currentUser,
  fetchAllProducts,
  fetchUpvotes,
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllProducts().then(() => {
      setLoading(false)
    })
    if (currentUser) {
      fetchUpvotes(currentUser.id, "Product")
    }
  }, [])

  return (
    <div className="product-index-container">
      <div className="product-index-header">
        <p className="product-index-header-text">Product Index</p>
      </div>
      <div className="product-index-header-border"></div>
      <div className="loading-container">
        <div className="sweet-loading">
          <GridLoader color={"#DA552F"} loading={loading} />
        </div>
      </div>

      <ul className="product-index">
        {productIds?.map((id) => {
          return (
            <ProductIndexItem
              product={products[id]}
              key={`product-index-item-${id}`}
              userUpvotes={userUpvotes}
              createUpvote={createUpvote}
              destroyUpvote={destroyUpvote}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ProductIndex
