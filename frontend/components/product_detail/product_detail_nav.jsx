import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetailNav extends React.Component {

  render() {
    let product = this.props.product;
    let linkUrl = product.linkUrl;
    if (!product.linkUrl) {
      linkUrl = "/";
    }
    return (
      <div className="product-detail-nav">
        <div className="product-detail-nav-upvote-container">
          <button className="orange-button large-size" value="Upvote">Upvote</button>
        </div>
        <div className="product-detail-nav-link-container">
          <a href={linkUrl} className="button white-button large-size">
            <div>Website</div>
            <div>{linkUrl}</div>
          </a>
        </div>
      </div>
    );
  }
}

export default ProductDetailNav;