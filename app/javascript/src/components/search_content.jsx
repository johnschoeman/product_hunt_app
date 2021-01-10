import React from 'react';
import SearchIndexContainer from './search_results_index_container/serach_index_container';
import ProductNav from './product_nav/product_nav';

class AppContent extends React.Component {

  render() {
    return (
      <div className="app-content">
        <div className="product-nav-container">
          <ProductNav />
        </div>
        <div className="product-feed-container">
          <SearchIndexContainer />
        </div>
        <div className="product-ad-container"> 
          <h3>Product Ad</h3>
        </div>
      </div>
    );
  }
}

export default AppContent;