import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { withRouter } from 'react-router';

import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // let user = state.users[state.ui.viewedUser];
  let user = { id: 1, name: 'user1', tagline: 'user1-tagline'}
  let viewedUser = state.ui.viewedUser;
  return {
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));