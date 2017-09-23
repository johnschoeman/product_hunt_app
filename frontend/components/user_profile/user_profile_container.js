import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  let viewedUserId = 1;

  return {
    viewedUser: 1
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);