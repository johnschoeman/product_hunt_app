import React from 'react';

class ProductDetailHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let product = this.props.product;
    return (
      <div className="product-detail-header">
        <div className="product-detail-header-img">
          <img src={product.thumbnailUrl}/>
        </div>

        <div className="product-detail-header-text">
          <p className="product-detail-header-name">{product.name}</p>
          <p className="product-detail-header-tagline">{product.tagline}</p>
          <div className="product-item-tags">
            <button >Tag</button>
          </div>
        
        </div>
      </div>
    );
  }
}

export default ProductDetailHeader;