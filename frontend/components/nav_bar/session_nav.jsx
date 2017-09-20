import React from 'react';
import { Link } from 'react-router-dom';

class SessionNav extends React.Component {

  render() {
    return (<nav className="login-signup"> 
        <Link to='/login'>LOG IN</Link>

        <Link to='/signup'>SIGN UP</Link>
    </nav>);
  }
}

export default SessionNav;