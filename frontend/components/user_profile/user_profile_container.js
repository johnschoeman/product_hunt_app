import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { withRouter } from 'react-router';

import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // let user = state.users[state.ui.viewedUser];
  let viewedUserId = ownProps.match.params.userId;
  let viewedUser = state.entities.viewedUser;
  let currentUserId = null;

  if (state.session.currentUser) {
    currentUserId = state.session.currentUser.id;
  }

  return {
    viewedUserId,
    viewedUser,
    currentUserId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));