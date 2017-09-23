import React from 'react';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    let product = this.props.product;
    console.log('p-item: ', product.thumbnailUrl);
    return (
      <li className="product-index-item">
        <div className="product-index-item-img">
          <img src={product.thumbnailUrl}/>
        </div>
        <div className="product-index-item-text">
          <p>{product.name}</p>
          <p>{product.tagline}</p>
        </div>
      </li>
    );
  }
}

export default ProductIndexItem;