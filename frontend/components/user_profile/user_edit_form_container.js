import { connect } from 'react-redux';
import UserEditForm from './user_edit_form.jsx';
import { editUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    test: true
  };
};

const mapDispactToProps = (dispatch, ownProps) => {

  return {
    editUser: (user) => dispatch(editUser(user))
  };
};

export default connect(mapStateToProps, mapDispactToProps)(UserEditForm);