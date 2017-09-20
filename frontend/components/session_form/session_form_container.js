import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    let formType = (ownProps.match.path === '/login') ? 'login' : 'signup';
    let errors = Object.values(state.errors.session);
    return {
        loggedIn: Boolean(state.session.currentUser),
        errors,
        formType
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    let processForm = (ownProps.match.path === '/login') ? login : signup;
    return {
        processForm: (user) => dispatch(processForm(user))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));