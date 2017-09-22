import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('did mount', this.props.fetchAllProducts);
    this.props.fetchAllProducts();
  }

  render () {
    let products = this.props.products;
    let productIds = this.props.productIds;
    return (
    <div className="product-index-container">
      <h1>Product Index</h1>
      <ul className="product-index">
        {productIds.map((id) => {
          return <ProductIndexItem product={products[id]} key={`product-index-item-${id}`}/>;
        })}
      </ul>
    </div>);
  }
}

export default ProductIndex;

