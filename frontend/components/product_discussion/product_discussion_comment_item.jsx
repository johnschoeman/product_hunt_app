import React from 'react';
import { withRouter } from 'react-router';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToUser = this.redirectToUser.bind(this);
  }

  redirectToUser(userId) {
    return (e) => {
      this.props.history.push(`/users/${userId}`);
    };
  }

  render() {
    let comment = this.props.comment;
    let imageUrl = comment.user.imageUrl;
    let user = comment.user;

    return (
      <div className={this.props.className}>
          <div className="user-spotlight">
            <div className="user-profile-img-container" onClick={this.redirectToUser(user.id)}>
             <img className="user-profile-img" src={imageUrl}/>
            </div>
            <div className="user-spolight-content">
              <div>{user.username}</div>
              <div>{user.headline}</div>
            </div>
          </div>
          <div className="comment-body">
            {comment.body}
          </div>
          <div className="comment-actions">
            <div>upvote</div>
            <div className="comment-reply-button">
              reply
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(CommentItem);