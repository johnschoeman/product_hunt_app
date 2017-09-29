import React from 'react';
import ReactModal from 'react-modal';
import { Route, Switch } from 'react-router';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session_form/session_form_container';
import NewProductFormContainer from './new_product_form/new_product_form_container';
import UserProfileContainer from './user_profile/user_profile_container';
import AppContent from './app_content';
import UserEditFormContainer from './user_profile/user_edit_form_container';
import ProductDetailContainer from './product_detail/product_detail_container';
import HeroBanner from './hero_banner/hero_banner';


import { AuthRoute, ProtectedRoute, UserRoute } from '../util/route_util';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      modalIsOpen: false,
      modalFormType: "login",
    };
    
    this.openModal = this.openModal.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  hideDropdown(e) {
    let dropDownArray = document.getElementsByClassName("dropdown-content");
    Array.prototype.forEach.call(dropDownArray, (dropdown) => {
      dropdown.classList.add("hide");
    });
    
  }

  openModal(formType) {
    return () => {
      this.setState({
        modalFormType: formType,
        modalIsOpen: true
      });
    };
  }

  afterModalOpen() {
    ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(128,128,128,0.75)';
    ReactModal.defaultStyles.content.display = 'flex';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="app" onClick={this.hideDropdown}>
        <header>
          <NavBarContainer openModal={this.openModal} />
        </header>

        <ReactModal
          id="modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal_Content"
          className="modal">


          <SessionFormContainer formType={this.state.modalFormType} closeModal={this.closeModal} />
        </ReactModal>
        
        <AuthRoute exact path="/" component={HeroBanner} openModal={this.openModal}/>
        <Switch>
          <ProtectedRoute exact path="/products/new" component={NewProductFormContainer} />
          <UserRoute exact path="/users/:userId/edit" component={UserEditFormContainer} />
          <Route path="/users/:userId" component={UserProfileContainer} />
          <Route path="/products/:productId" component={ProductDetailContainer} />
          <Route path="/" component={AppContent} />
        </Switch>
      </div>
    );
  }
}

export default App;