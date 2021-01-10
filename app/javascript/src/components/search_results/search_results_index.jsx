import React from 'react';
import ProductIndexItem from '../products_index/product_index_item';

class SearchResultsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let products = this.props.products;
    let productIds = this.props.productIds;

    return (
     <div className="search-feed">
      <div className="search-index-container">

        <div className="product-index-header">
          <p className="search-index-header-text">Search Index</p>
        </div>
        <div className="product-index-header-border"></div>
        <ul className="search-index">
          {productIds.map((id) => {
            return <ProductIndexItem product={products[id]} key={`product-index-item-${id}`}/>;
          })}
        </ul>

      </div>
     </div>
    );
  }
}

export default SearchResultsIndex;
