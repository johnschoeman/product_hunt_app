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
      product_id: this.props.productId
    };
    this.props.createComment(comment).then(() => {this.setState({commentText: ""});});
  }

  handleChange(e) {
    this.setState({commentText: e.target.value});
  }

  autoSize() {
    let textArea = document.getElementById('textArea');
    let text = textArea.value.replace(/\n/g, '<br/>') + '&nbsp;';
    let textCopy = document.getElementById('textCopy');
    textCopy.innerHTML = text;
  }

  render() {
    let user = this.props.user;
    return (
      <form className="new-comment-form" onSubmit={this.handleSubmit}>
        <div className="new-comment-form-input-bar">
          <div className="user-profile-img-container">
            <img className="user-profile-img" src={user.imageUrl}/>
          </div>
          <div id="textContainer" className="textarea-container">
            <textarea 
                  id="textArea"
                  type="text" 
                  placeholder="What do you think of this product..." 
                  onChange={this.handleChange}
                  onKeyDown={this.autoSize}
                  value={this.state.commentText}/>
            <div id="textCopy" className="text-copy"/>
          </div>
        </div>
        <div className="new-comment-form-button-container">
          <input type="submit" className="button orange-button medium-size" value="Comment"></input>
        </div>
      </form>
    );
  }
}

export default CommentForm;