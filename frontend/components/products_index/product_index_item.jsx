import React from 'react';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    let product = this.props.product;
    return (
      <li className="product-index-item">
        <div className="product-index-item-img">
          <img src={product.thumbnailUrl}/>
        </div>
        <div className="product-index-item-text">
          <p className="product-name">{product.name}</p>
          <p className="product-tagline">{product.tagline}</p>
        </div>
      </li>
    );
  }
}

export default ProductIndexItem;