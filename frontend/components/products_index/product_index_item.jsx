import React from 'react';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    let product = this.props.product;
    console.log('p-item: ', product);
    return (
      <li className="product-index-item">
        <div className="product-index-item-img">
          <img src="https://res.cloudinary.com/dekgrddbo/image/upload/v1506100192/sample.jpg"/>
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