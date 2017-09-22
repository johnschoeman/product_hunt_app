import React from 'react';
import { Link } from 'react-router-dom';

class SessionNav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(formType) {
    return () => {
      console.log('in handle click: ', this.props);
      this.props.clearErrors();
      this.props.openModal(formType)();
    };
  }

  render() {
    return (<nav className="login-signup"> 
        <button className="login-button medium-size" onClick={this.handleClick('login')} >LOG IN</button>
        <button className="signup-button medium-size" onClick={this.handleClick('signup')} >SIGN UP</button>
            </nav>
    );
  }
}

export default SessionNav;