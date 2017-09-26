import React from 'react';
import Thread from './product_discussion_thread';

class ProductDiscussion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    let comments = this.props.comments;
    return (
      <div className="product-discussion">
          {comments.map((comment) => (
            <Thread 
                key={`discussion-thread-${comment.id}`} 
                comment={comment} />
          ))}
      </div>
    );
  }
}

export default ProductDiscussion;