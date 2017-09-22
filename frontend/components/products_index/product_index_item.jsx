import React from 'react';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    let product = this.props.product;
    console.log('p-item: ', product)
    return (
      <li className="product-index-item">
        <div>
          <div className="product-index-item-img">
            {product.thumbnailUrl}
          </div>
          <div className="product-index-item-text">
            <p>{product.name}</p>
            <p>{product.tagline}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductIndexItem;