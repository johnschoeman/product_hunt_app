import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.autoSize = this.autoSize.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = {
      body: this.state.commentText,
      user_id: this.props.user.id,
      product_id: this.props.productId,
      parent_comment_id: this.props.parentCommentId
    };
    this.props.createComment(comment)
        .then(() => {
          this.setState({commentText: ""});
        })
        .then(() => {
          this.autoSize();
        });
  }

  handleChange(e) {
    this.setState({commentText: e.target.value});
    this.autoSize();
  }

  autoSize() {
    let commentId = this.props.commentId;
    let textArea = document.getElementById(`textArea-${commentId}`);
    let text = textArea.value.replace(/\n/g, '<br/>') + '&nbsp;';
    let textCopy = document.getElementById(`textCopy-${commentId}`);
    textCopy.innerHTML = text;
  }
  
  render() {
    console.log(this.props);
    let user = this.props.user;
    let classProp = this.props.classProp;
    let commentId = this.props.commentId;
    let userIcon = (
      <div className="user-profile-img-container">
        <img className="user-profile-img" src={user.imageUrl}/>
      </div>
    );

    return (
      <form className={classProp} onSubmit={this.handleSubmit}>
        <div className={`${classProp}-input-bar`}>
          {userIcon}
          <div id="textContainer" className="textarea-container">
            <textarea 
                  id={`textArea-${commentId}`}
                  type="text" 
                  placeholder="What do you think of this product..." 
                  onChange={this.handleChange}
                  value={this.state.commentText}/>
            <div id={`textCopy-${commentId}`} className="text-copy"/>
          </div>
        </div>
        <div className={`${classProp}-button-container`}>
          <input type="submit" className="button orange-button medium-size" value="Comment"></input>
        </div>
      </form>
    );
  }
}

export default CommentForm;