import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetailNav extends React.Component {

  render() {
    
    return (
      <div className="product-detail-nav">
        <div className="product-detail-nav-upvote-container">
          <button className="orange-button large-size" value="Upvote">Upvote</button>
        </div>
        <div className="product-detail-nav-link-container">
          <Link to="/" className="button white-button large-size" >Webstie</Link>
          <Link to="/" className="button white-button large-size" >Chrome Store</Link>
        </div>
      </div>
    );
  }
}

export default ProductDetailNav;