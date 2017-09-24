import React from 'react';
import ProductFeed from './product_feed/product_feed';
import ProductNav from './product_nav/product_nav';

class AppContent extends React.Component {

  render() {
    return (
      <div className="app-content">
        <div className="product-nav-container">
          <ProductNav />
        </div>
        <div className="product-feed-container">
          <ProductFeed />
        </div>
        <div className="product-ad-container"> 
          <h3>Product Ad</h3>
        </div>
      </div>
    );
  }
}

export default AppContent;
