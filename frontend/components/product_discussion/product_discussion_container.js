import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDiscussion from './product_discussion';
import { createComment } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  let comments = [];
  let childComments = [];
  let currentUser = state.session.currentUser;
  let productId = ownProps.match.params.productId;
  if (state.entities.comments) {
    comments = Object.values(state.entities.comments.byId);
    childComments = state.entities.comments.byParentId;
  }

  return {
    comments,
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