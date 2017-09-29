import React from 'react';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class HeroBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      modalFormType: "login",
    };
    
    this.openModal = this.openModal.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this);
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

  afterModalOpen() {
    ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(128,128,128,0.75)';
    ReactModal.defaultStyles.content.display = 'flex';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleClick(formType) {
    return () => {
      this.openModal(formType)();
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="hero-banner">

        <ReactModal
          id="modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal_Content"
          className="modal">


          <SessionFormContainer formType={this.state.modalFormType} closeModal={this.closeModal} />
        </ReactModal>
        <div className="hero-banner-container">
          <div className="hero-banner-content">
            <span className="hero-banner-title">Discover your next favorite thing</span>
            <p className="hero-banner-text">Product Hunt surfaces the best new products, every day. It's a place for product-loving enthusiasts to share and geek out about the latest mobile apps, websites, hardware projects, and tech creations.</p>
            <button className="hero-button" onClick={this.handleClick('signup')}>SIGN UP</button>
          </div>
          <div className="hero-banner-img"></div>
        </div>
      </div>
    );
  }
}

export default HeroBanner;