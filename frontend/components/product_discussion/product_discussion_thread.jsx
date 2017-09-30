import React from 'react';
import CommentItem from './product_discussion_comment_item';

class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comment = this.props.comment;
    let childCommentsAllIds = this.props.childComments.allIds;
    let childCommentsById = this.props.childComments.byId;
    let currentUser = this.props.currentUser;
    let productId = this.props.productId;
    let createComment = this.props.createComment;
    let destroyComment = this.props.destroyComment;
    console.log(destroyComment);
    let createUpvote = this.props.createUpvote;
    let destroyUpvote = this.props.destroyUpvote;
 
    return (
      <div className="thread">
          <CommentItem 
                comment={comment} 
                className={`comment`}
                currentUser={currentUser}
                productId={productId}
                parentCommentId={comment.id}
                createComment={createComment}
                destroyComment={destroyComment}
                createUpvote={createUpvote}
                destroyUpvote={destroyUpvote}/>
          {childCommentsAllIds.map((childCommentId) => {
            return (
              <CommentItem 
                    comment={childCommentsById[childCommentId]}
                    key={`child-comment-${childCommentId}`}
                    className={`child-comment`} 
                    currentUser={currentUser}
                    productId={productId}
                    parentCommentId={comment.id}
                    createComment={createComment}
                    destroyComment={destroyComment}
                    createUpvote={createUpvote}
                    destroyUpvote={destroyUpvote}/>
            );
          })}
      </div>
    );
  }
}

export default Thread;