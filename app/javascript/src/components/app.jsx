import React, { useState } from "react";
import ReactModal from "react-modal";
import { Route, Switch } from "react-router";

import NavBarContainer from "./nav_bar/nav_bar_container";
import SessionFormContainer from "./session_form/session_form_container";
import NewProductFormContainer from "./new_product_form/new_product_form_container";
import UserProfileContainer from "./user_profile/user_profile_container";
import AppContent from "./app_content";
import UserEditFormContainer from "./user_profile/user_edit_form_container";
import ProductDetailContainer from "./product_detail/product_detail_container";
import HeroBanner from "./hero_banner/hero_banner";

import { AuthRoute, ProtectedRoute, UserRoute } from "../util/route_util";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalFormType, setModalFormType] = useState("login");

  const hideDropdown = (e) => {
    let dropDownArray = document.getElementsByClassName("dropdown-content");
    Array.prototype.forEach.call(dropDownArray, (dropdown) => {
      dropdown.classList.add("hide");
    });
  };

  const openModal = (formType) => {
    return () => {
      setModalFormType(formType);
      setModalIsOpen(true);
    };
  };

  const afterModalOpen = () => {
    ReactModal.defaultStyles.overlay.backgroundColor = "rgba(128,128,128,0.75)";
    ReactModal.defaultStyles.content.display = "flex";
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="app" onClick={hideDropdown}>
      <header>
        <NavBarContainer openModal={openModal} />
      </header>

      <ReactModal
        id="modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal_Content"
        className="modal"
      >
        <SessionFormContainer
          formType={modalFormType}
          closeModal={closeModal}
        />
      </ReactModal>

      <AuthRoute exact path="/" component={HeroBanner} openModal={openModal} />
      <Switch>
        <ProtectedRoute
          exact
          path="/products/new"
          component={NewProductFormContainer}
        />
        <UserRoute
          exact
          path="/users/:userId/edit"
          component={UserEditFormContainer}
        />
        <Route path="/users/:userId" component={UserProfileContainer} />
        <Route path="/products/:productId" component={ProductDetailContainer} />
        <Route path="/" component={AppContent} />
      </Switch>
    </div>
  );
};

export default App;

