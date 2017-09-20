import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

import ReactModal from 'react-modal';


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      modalIsOpen: false,
      modalFormType: "login"
    };
    
    this.openModal = this.openModal.bind(this);
    this.afterModalOpen = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(formType) {
    return () => {
      this.setState({
        modalFormType: formType,
        modalIsOpen: true
      });
    };
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }



  render() {
    return (
      <div>
        <header>
          <NavBarContainer openModal={this.openModal} />
        </header>


        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          sytle=""
          contentLabel="Example Modal">

          <SessionFormContainer formType={this.state.modalFormType} closeModal={this.closeModal} />
        </ReactModal>

      </div>
    );
  }
}

export default App;