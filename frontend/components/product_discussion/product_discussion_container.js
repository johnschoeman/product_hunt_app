import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDiscussion from './product_discussion';

const mapStateToProps = (state, ownProps) => {

  return {
    discussion: { 1: "test" }
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    test: "dispatch"
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDiscussion));