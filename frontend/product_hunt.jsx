import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'


//Start Testing
import {signup, login, logout} from './actions/session_actions';

window.signup = signup
window.login = login
window.logout = logout
//End Testing

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    let store = configureStore();

    //Start Testing
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    //End Testing

    ReactDOM.render(<h1>Product Hunt App</h1>, root);
});