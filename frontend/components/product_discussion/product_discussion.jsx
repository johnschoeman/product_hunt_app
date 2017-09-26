import React from 'react';

class ProductDiscussion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    let comments = this.props.comments;
    return (
      <div className="product-discussion">
        <ul>
          {comments.map((comment) => (
            <li>{comment.body}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductDiscussion;