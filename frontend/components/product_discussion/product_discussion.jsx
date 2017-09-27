import React from 'react';
import Thread from './product_discussion_thread';
import CommentForm from './product_discussion_comment_form';

class ProductDiscussion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let comments = this.props.comments;
    let childComments = this.props.childComments;
    let currentUser = this.props.currentUser;
    let commentForm = undefined;
    let productId = this.props.productId;
    let createComment = this.props.createComment;
    
    if (currentUser) {
      commentForm = <CommentForm 
                      user={currentUser} 
                      productId={productId}
                      createComment={createComment}/>;
    }
    return (
      <div className="product-discussion">
        {commentForm}
        <div>
          {comments.map((comment) => {
            if (!comment.parentCommentId){
              return (
                <Thread 
                  key={`discussion-thread-${comment.id}`} 
                  comment={comment}
                  childComments={childComments[comment.id]} />
                );
              }
            }
          )}
        </div>
      </div>
    );
  }
}

export default ProductDiscussion;