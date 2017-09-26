import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comment = this.props.comment;
    
    return (
      <div className={this.props.className}>
          <div className="user-spotlight">
            <div className="user-image">
              image
            </div>
            <div className="user-spolight-content">
              <div>user name</div>
              <div>user details</div>
            </div>
          </div>
          <div className="comment-body">
            {comment.body}
          </div>
          <div className="comment-actions">
            <div>upvote</div>
            <div>reply</div>
          </div>
      </div>
    );
  }
}

export default CommentItem;