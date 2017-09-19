import React from 'react';
import ReactDOM from 'react-dom';

import {signup, login, logout} from './util/session_api_util';

window.signup = signup
window.login = login
window.logout = logout

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    
    ReactDOM.render(<h1>Product Hunt App</h1>, root);
});