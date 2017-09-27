import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, {formType}) => {
    let errors = Object.values(state.errors.session);
    return {
        loggedIn: Boolean(state.session.currentUser),
        errors,
        formType
    };
};

const mapDispatchToProps = (dispatch, {formType, closeModal}) => {
    let processForm = (formType === 'login') ? login : signup;
    return {
        processForm: (user) => dispatch(processForm(user)),
        closeModal
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));