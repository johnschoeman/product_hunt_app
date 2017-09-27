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
import SearchResultsIndexContainer from './search_results_index/search_results_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

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
    console.log('instantiate open modal');
    return () => {
      console.log('call openModal');
      this.setState({
        modalFormType: formType,
        modalIsOpen: true
      });
    };
  }

  afterModalOpen() {
    console.log('call afterModal');
    ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(128,128,128,0.75)';
    ReactModal.defaultStyles.content.display = 'flex';
  }

  closeModal() {
    console.log('call closeModal');
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

        <Switch>
          <ProtectedRoute exact path="/products/new" component={NewProductFormContainer} />
          <ProtectedRoute exact path="/users/:userId/edit" component={UserEditFormContainer} />
          <Route path="/users/:userId" component={UserProfileContainer} />
          <Route path="/products/:productId" component={ProductDetailContainer} />
          <Route path="/search" component={SearchResultsIndexContainer} />
          <Route path="/" component={AppContent} />
        </Switch>
      </div>
    );
  }
}

export default App;