import React from 'react';
import { Link } from 'react-router-dom';

class SessionNav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(formType) {
    return () => {
      this.props.clearErrors();
      this.props.openModal(formType)();
    };
  }

  render() {
    return (<nav className="login-signup"> 
        <button className="white-button medium-size" onClick={this.handleClick('login')} >LOG IN</button>
        <button className="orange-button medium-size" onClick={this.handleClick('signup')} >SIGN UP</button>
            </nav>
    );
  }
}

export default SessionNav;