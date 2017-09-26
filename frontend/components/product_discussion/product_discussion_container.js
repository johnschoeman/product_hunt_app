import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDiscussion from './product_discussion';

const mapStateToProps = (state, ownProps) => {
  let comments = [];
  if (state.entities.comments.byId) {
    comments = Object.values(state.entities.comments.byId);
  }
  return {
    comments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    test: "dispatch"
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDiscussion));