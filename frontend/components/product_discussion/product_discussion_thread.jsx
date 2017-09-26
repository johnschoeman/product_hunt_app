import React from 'react';
import CommentItem from './product_discussion_comment_item';

class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comment = this.props.comment;
    let childComments = [];
    if (comment.childComments) {
      childComments = Object.values(comment.childComments);
    }
    return (
      <div className="thread">
          <CommentItem 
                comment={comment} 
                className={`comment`}/>
          {childComments.map((childComment) => {
            return (
              <CommentItem 
                    comment={childComment}
                    key={`child-comment-${childComment.id}`}
                    className={`child-comment`} />
            );
          })}
      </div>
    );
  }
}

export default Thread;