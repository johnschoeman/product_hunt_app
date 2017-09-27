import React from 'react';
import Thread from './product_discussion_thread';
import CommentForm from './product_discussion_comment_form';

class ProductDiscussion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let commentsById = this.props.commentsById;
    let commentIds = this.props.commentIds;
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
          {commentIds.map((commentId) => {
            let comment = commentsById[commentId];
            if (!comment.parentCommentId){
              return (
                <Thread 
                  key={`discussion-thread-${comment.id}`} 
                  comment={comment}
                  childComments={childComments[commentId]} />
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