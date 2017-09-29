import React from 'react';
import { Link } from 'react-router-dom';
import i from 'react-fontawesome';

class ProductDetailNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleUpvote = this.toggleUpvote.bind(this);
  }

  toggleUpvote(e) {
    console.log('upvote');
    e.stopPropagation();
    let product = this.props.product;
    if (product.currentUserUpvoted) {
      this.props.destroyUpvote("Product", this.props.product.id);
    } else {
      this.props.createUpvote("Product", this.props.product.id);
    }
  }

  render() {
    let product = this.props.product;
    let linkUrl = product.linkUrl;
    let upvoteButtonClass = (product.currentUserUpvoted) ? "orange-button" : "orange-border-button";
    let upvoteButtonText = (product.currentUserUpvoted) ? "UPVOTED" : "UPVOTE";
    if (!product.linkUrl) {
      linkUrl = "/";
    }
    return (
      <div className="product-detail-nav">
        <div className="product-detail-nav-upvote-container">
          <button onClick={this.toggleUpvote} 
                  className={`${upvoteButtonClass} large-size`} 
                  value="Upvote">
                  <i className="fa fa-thumbs-up" />
                  {upvoteButtonText}
                  <div>{product.countUpvotes}</div>
          </button>
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