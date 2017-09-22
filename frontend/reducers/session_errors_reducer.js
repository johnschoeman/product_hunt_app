import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, RECEIVE_CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_CLEAR_ERRORS:
            console.log('in session Errors reducer');
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;