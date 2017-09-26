import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user;
    return (
      <div>
        <input type="text" placeholder="What do you think of this product..." />
      </div>
    );
  }
}

export default CommentForm;