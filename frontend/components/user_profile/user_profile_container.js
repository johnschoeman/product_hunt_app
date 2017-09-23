import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  let viewedUserId = 1;

  return {
    viewedUser: state.users[viewedUserId]
  };
};