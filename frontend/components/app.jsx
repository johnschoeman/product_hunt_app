import React from 'react';
import ReactModal from 'react-modal';
import { Route, Switch } from 'react-router';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session_form/session_form_container';
import ProductIndexContainer from './products_index/products_index_container';
import NewProductFormContainer from './new_product_form/new_product_form_container';
import UserProfileContainer from './user_profile/user_profile_container';

// import { AuthRoute } from '../util/route_util';

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
    // e.preventDefault();
    let dropDownArray = document.getElementsByClassName("dropdown-content");
    console.log("hide dropdowns", dropDownArray);
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
          <Route path="/products/new" component={NewProductFormContainer} />
          <Route path="/users/:userId" component={UserProfileContainer} />
          <Route path="/" component={ProductIndexContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;