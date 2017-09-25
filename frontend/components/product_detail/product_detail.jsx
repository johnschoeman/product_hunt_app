import React from 'react';

import ProductDetailHeader from './product_detail_header';
import ProductDetailMedia from './product_detail_media';
import ProductDiscussionContainer from '../product_discussion/product_discussion_container';
import ProductDetailNav from './product_detail_nav';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-detail-container">
        <ProductDetailHeader />
        <ProductDetailMedia />
        <ProductDiscussionContainer />
        <ProductDetailNav />
      </div>
    );
  }
}

export default ProductDetail;