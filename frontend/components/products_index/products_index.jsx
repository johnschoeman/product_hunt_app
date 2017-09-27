import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render () {
    let products = this.props.products;
    let productIds = this.props.productIds;
    return (
    <div className="product-index-container">
      <div className="product-index-header">
        <p className="product-index-header-text">Product Index</p>
        <p className="product-index-header-popular-newest">popluar | newest</p>
      </div>
      <ul className="product-index">
        {productIds.map((id) => {
          return <ProductIndexItem product={products[id]} key={`product-index-item-${id}`}/>;
        })}
      </ul>
    </div>);
  }
}

export default ProductIndex;

