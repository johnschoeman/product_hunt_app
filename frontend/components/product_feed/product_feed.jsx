import React from 'react';
import ProductsIndexContainer from '../products_index/products_index_container';

class ProductFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('in product feed');
    return (
      <div className="product-feed">
        <ProductsIndexContainer />
      </div>
    );
  }
}

export default ProductFeed;