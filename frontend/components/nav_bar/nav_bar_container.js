import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

    return {
        currentUser: state.session.currentUser,
        openModal: ownProps.openModal,
        closeModal: ownProps.closeModal
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        logout: () => dispatch(logout()).then(() => { ownProps.history.push("/"); } ),
        clearErrors: dispatch(clearErrors()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));