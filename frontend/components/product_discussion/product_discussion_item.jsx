import React from 'react';

class ProductDiscussionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comment = this.props.comment;
    let childCommentsArray = [];
    if (comment.childComments) {
      childCommentsArray = Object.values(comment.childComments);
    }
    return (
      <div className="discussion-comment">
        <li>
          <div>{comment.body}</div>
          <ul>
           {childCommentsArray.map((childComment) => {
              return <li>{childComment.body}</li>;
            })}
         </ul>
        </li>
      </div>
    );
  }
}

export default ProductDiscussionItem;