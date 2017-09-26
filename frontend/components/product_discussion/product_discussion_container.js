import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDiscussion from './product_discussion';

const mapStateToProps = (state, ownProps) => {
  let comments = [];
  let childComments = [];
  let currentUser = state.session.currentUser;
  if (state.entities.comments) {
    comments = Object.values(state.entities.comments.byId);
    childComments = state.entities.comments.byParentId;
  }

  return {
    comments,
    childComments,
    currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    test: "dispatch"
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDiscussion));