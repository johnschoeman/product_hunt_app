import React from 'react';
import { withRouter } from 'react-router';

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
    console.log(product);
    let commentCount = product.countComments;
    let upvoteCount = 29;
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
            <div className="product-item-minor-actions">
              <button className="white-button small-size" >{`^ ${upvoteCount}`}</button>
              <button className="white-button small-size gray-text" value={commentCount}>{`${commentCount}`}</button>
            </div>
        </div>
        
        </div>
      </li>
    );
  }
}

export default withRouter(ProductIndexItem);