import React from 'react';
import Thread from './product_discussion_thread';
import CommentForm from './product_discussion_comment_form';

class ProductDiscussion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let comments = this.props.comments;
    let childComments = this.props.childComments;
    let currentUser = this.props.currentUser;
    let commentForm = undefined;
    if (currentUser) {
      commentForm = <CommentForm user={currentUser}/>;
    }
    return (
      <div className="product-discussion">
        {commentForm}
        <div>
          {comments.map((comment) => (
            <Thread 
                key={`discussion-thread-${comment.id}`} 
                comment={comment}
                childComments={childComments} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductDiscussion;