import React from 'react';
import { withRouter } from 'react-router';
import i from 'react-fontawesome';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.upvote = this.upvote.bind(this);
  }
  
  handleClick(e) {
    this.props.history.push(`/products/${this.props.product.id}`);
  }

  upvote(e) {
    console.log('upvote');
    e.stopPropagation();
    this.props
  }

  render() {
    let product = this.props.product;
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
              <button className="white-button small-size"
                      onClick={this.upvote} >
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