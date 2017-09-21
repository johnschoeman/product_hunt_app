import React from 'react';
import ReactModal from 'react-modal';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session_form/session_form_container';
import PopoverContainer from './popover/popover_container';


// import { AuthRoute } from '../util/route_util';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(128, 128, 128, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
}

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
  }

  openModal(formType) {
    console.log('instantiate open modal')
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
      <div>
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

      </div>
    );
  }
}

export default App;