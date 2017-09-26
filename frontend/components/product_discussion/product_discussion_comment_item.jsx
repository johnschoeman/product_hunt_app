import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToUser = this.redirectToUser.bind(this);
  }

  redirectToUser(e) {
    console.log('clicked on user image');
  }

  render() {
    let comment = this.props.comment;
    // let imageUrl = this.comment.user.imageUrl
    let imageUrl = "https://res.cloudinary.com/dekgrddbo/image/upload/v1506306926/adventure-time-tshirt-jake-the-dog-face_s6ux9r.jpg"
    return (
      <div className={this.props.className}>
          <div className="user-spotlight">
            <div className="user-profile-img-container" onClick={this.redirectToUser}>
             <img className="user-profile-img" src={imageUrl}/>
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