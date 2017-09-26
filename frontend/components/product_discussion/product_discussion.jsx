import React from 'react';
import ProductDiscussionItem from './product_discussion_item';

class ProductDiscussion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    let comments = this.props.comments;
    return (
      <div className="product-discussion">
        <ul>
          {comments.map((comment) => (
            <ProductDiscussionItem key={`discussion-item-${comment.id}`} comment={comment} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductDiscussion;