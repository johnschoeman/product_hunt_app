import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDiscussion from './product_discussion';
import { createComment } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  let commentsById = {};
  let childComments = {};
  let commentIds = [];
  let currentUser = state.session.currentUser;
  let productId = ownProps.match.params.productId;
  
  if (state.entities.comments) {
    commentsById = state.entities.comments.byId;
    commentIds = state.entities.comments.allIds;
    childComments = state.entities.comments.byParentId;
  }

  return {
    commentsById,
    commentIds,
    childComments,
    currentUser,
    productId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDiscussion));