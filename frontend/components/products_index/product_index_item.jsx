import React from 'react';
import { withRouter } from 'react-router';
import i from 'react-fontawesome';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleUpvote = this.toggleUpvote.bind(this);
  }
  
  handleClick(e) {
    this.props.history.push(`/products/${this.props.product.id}`);
  }

  toggleUpvote(e) {
    console.log('upvote');
    e.stopPropagation();
    let product = this.props.product;
    if (product.currentUserUpvoted) {
      this.props.destroyUpvote("product", this.props.productId);
    } else {
      this.props.createUpvote("Product", this.props.product.id);
    }
  }

  render() {
    let product = this.props.product;
    let commentCount = product.countComments;
    let upvoteCount = product.countUpvotes;
    let upvoteButtonClass = (product.currentUserUpvoted) ? "orange-button" : "white-button";

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
              <button className={`${upvoteButtonClass} small-size`}
                      onClick={this.toggleUpvote} >
                <i className="fa fa-thumbs-up" size='3x'/> {`${upvoteCount}`}
              </button>
              <button className="white-button small-size gray-text" 
                      onClick={this.handleClick}>
                <i className="fa fa-comment"/> {`${commentCount}`}
              </button>
            </div>
        </div>
        
        </div>
      </li>
    );
  }
}

export default withRouter(ProductIndexItem);