import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    let formType = (ownProps.match.path === '/login') ? 'login' : 'signup';
    return {
        loggedIn: Boolean(state.session.currentUser),
        errors: state.errors.session,
        formType
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    let processForm = (ownProps.match.path === '/login') ? login : signup;
    return {
        processForm: (user) => dispatch(processForm(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);