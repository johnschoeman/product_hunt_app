import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    sessionLinks() {
        return (<nav className="login-signup"> 
            <Link to='/login'>LOG IN</Link>
            
            <Link to='/signup'>SIGN UP</Link>
        </nav>);
    }
    
    userNav(currentUser, logout) {

       return ( <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
                 </hgroup> );
    }

    render() {
        let currentUser = this.props.currentUser;
        let logout = this.props.logout;
        let navBarContent = undefined;
        navBarContent = this.props.currentUser ? this.userNav(currentUser, logout) : this.sessionLinks();
        return (
        <div>
            <h1>ProductHunt</h1>
            {navBarContent}
        </div>)
        ;
    }
}

export default NavBar;