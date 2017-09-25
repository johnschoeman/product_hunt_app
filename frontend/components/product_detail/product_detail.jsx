import React from 'react';
import ProductDetailHeader from './product_detail_header';
import ProductDetailMedia from './product_detail_media';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-detail-container">
        <ProductDetailHeader />
        <ProductDetailMedia />
      </div>
    );
  }
}

export default ProductDetail;