import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({commentText: e.target.value});
  }

  render() {
    let user = this.props.user;
    return (
      <div className="new-comment-form">
        <div className="new-comment-form-input-bar">
          <div className="user-profile-img-container">
            <img className="user-profile-img" src={user.imageUrl}/>
          </div>
          <textarea type="text" 
                placeholder="What do you think of this product..." 
                onChange={this.handleChange}
                value={this.state.commentText}/>
        </div>
        <div className="new-comment-form-button-container">
          <input type="submit" className="button orange-button medium-size" value="Comment"></input>
        </div>
      </div>
    );
  }
}

export default CommentForm;