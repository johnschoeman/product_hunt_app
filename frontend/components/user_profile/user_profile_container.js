import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  // let user = state.users[state.ui.viewedUser];
  let user = { id: 1, name: 'user1', tagline: 'user1-tagline'};
  return {
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);