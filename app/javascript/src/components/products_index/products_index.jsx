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
    if (this.props.currentUser) {
      this.props.fetchUpvotes(this.props.currentUser.id, "Product");
    }
  }

  render () {
    let products = this.props.products;
    let productIds = this.props.productIds;
    let userUpvotes = this.props.userUpvotes;
    let createUpvote = this.props.createUpvote;
    let destroyUpvote = this.props.destroyUpvote;
    
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
          return <ProductIndexItem 
                      product={products[id]} 
                      key={`product-index-item-${id}`}
                      userUpvotes={userUpvotes}
                      createUpvote={createUpvote}
                      destroyUpvote={destroyUpvote}/>;
        })}
      </ul>
    </div>);
  }
}

export default ProductIndex;

