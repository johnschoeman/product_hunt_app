import React from 'react';
import CommentItem from './product_discussion_comment_item';

class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comment = this.props.comment;
    let childComments = this.props.childComments;
    let currentUser = this.props.currentUser;
    let productId = this.props.productId;
    let createComment = this.props.createComment;
 
    return (
      <div className="thread">
          <CommentItem 
                comment={comment} 
                className={`comment`}
                currentUser={currentUser}
                productId={productId}
                parentCommentId={comment.id}
                createComment={createComment}/>
          {childComments.map((childComment) => {
            return (
              <CommentItem 
                    comment={childComment}
                    key={`child-comment-${childComment.id}`}
                    className={`child-comment`} 
                    currentUser={currentUser}
                    productId={productId}
                    parentCommentId={comment.id}
                    createComment={createComment}/>
            );
          })}
      </div>
    );
  }
}

export default Thread;