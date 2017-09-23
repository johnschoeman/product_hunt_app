import React from 'react';
import { withRouter } from 'react-router'

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.props.history.push(`/products/${this.props.product.id}`);
  }

  render() {
    let product = this.props.product;
    return (
      <li className="product-index-item" onClick={this.handleClick}>
        <div className="product-index-item-img">
          <img src={product.thumbnailUrl}/>
        </div>

        <div className="product-index-item-text">
          <p className="product-name">{product.name}</p>
          <p className="product-tagline">{product.tagline}</p>
          <div className="product-item-buttons">
            <div className="product-item-tags">
              <button >Tag</button>
            </div>
            <div className="product-item-comments-upvotes">
              <button >Upvote</button>
              <button >Comment</button>
            </div>
        </div>
        
        </div>
      </li>
    );
  }
}

export default withRouter(ProductIndexItem);