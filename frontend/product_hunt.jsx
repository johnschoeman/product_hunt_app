import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


//Start Testing
import {signup, login, logout} from './actions/session_actions';
import {fetchProduct, fetchAllProducts, createProduct} from './actions/product_actions';
import { setViewedUser, setViewedProduct } from './actions/ui_actions';

window.signup = signup;
window.login = login;
window.logout = logout;

window.fetchProduct = fetchProduct;
window.fetchAllProducts = fetchAllProducts;
window.createProduct = createProduct;

window.setViewedUser = setViewedUser;
window.setViewedProduct = setViewedProduct;
//End Testing

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    let store = undefined;

    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    //Start Testing
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    //End Testing

    ReactDOM.render(<Root store={ store } />, root);
});