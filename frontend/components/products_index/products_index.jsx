import React from 'react';
import ProductIndexItem from './product_index_item';
import { GridLoader } from 'react-spinners';

class ProductIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchAllProducts().then(() => {
      this.setState({loading: false});
    });
  }

  render () {
    let products = this.props.products;
    let productIds = this.props.productIds;
    return (
    <div className="product-index-container">
      <div className="product-index-header">
        <p className="product-index-header-text">Product Index</p>
      </div>
        <div className="product-index-header-border"></div>
      <div className="loading-container">
        <div className="sweet-loading">
          <GridLoader
            color={'#DA552F'}
            loading={this.state.loading} />
        </div>
      </div>

      <ul className="product-index">
        {productIds.map((id) => {
          return <ProductIndexItem product={products[id]} key={`product-index-item-${id}`}/>;
        })}
      </ul>
    </div>);
  }
}

export default ProductIndex;

