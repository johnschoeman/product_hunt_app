import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo';
import SearchBarContainer from '../search_bar/search_bar_container';
import SiteNav from './site_nav';
import SessionNav from './session_nav';
import UserNav from './user_nav';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;
    let userSessionNav = this.props.currentUser ? (
      <UserNav currentUser={currentUser} logout={logout}/>
      ) : (
      <SessionNav /> );
    return (
      <div>
        <Logo />
        <SearchBarContainer />
        <SiteNav />
        { userSessionNav }
      </div>
    );
  }
}

export default NavBar;