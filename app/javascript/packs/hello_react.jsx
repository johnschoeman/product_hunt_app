import React from "react";
import ReactDOM from "react-dom";

import configureStore from "../src/store/store";
import Root from "../src/components/root";

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let store = undefined;

  //if (window.currentUser) {
  //const preloadedState = { session: { currentUser: window.currentUser } };
  //store = configureStore(preloadedState);
  //} else {
  store = configureStore();
  //}

  ReactDOM.render(<Root store={store} />, root);
});
