import React from 'react';

class ProductIndex extends React.Component {
  constructor() {
    super();
  }
  render () {
    let products = this.props.products;
    let productIds = this.props.productIds;
    return (
    <div>
      <h1>Product Index</h1>
      <ul>
        {productIds.map((id) => {
          return <li key={`product-item-${id}`}>{products[id].name}</li>;
        })}
      </ul>
    </div>);
  }
}

export default ProductIndex;

