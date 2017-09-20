import React from 'react';

class UserNav extends React.Component {
    
  render()  {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;
    return ( 
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup> 
      );
    }
}

export default UserNav;