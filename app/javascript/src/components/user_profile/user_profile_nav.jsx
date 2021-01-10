import React from 'react';
import { NavLink } from 'react-router-dom';

class UserProfileNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let user = this.props.user;
    return (
      <ul className="user-profile-nav">
        <li className="user-profile-nav-item">
          <NavLink exact to={`/users/${user.id}`} activeClassName="selected">
            20 Upvotes
          </NavLink>
        </li>
        <li className="user-profile-nav-item" >
          <NavLink to={`/users/${user.id}/topics`} activeClassName="selected">
            9 Topics
          </NavLink>
        </li>
        <li className="user-profile-nav-item">
          <NavLink to={`/users/${user.id}/collections`} activeClassName="selected">
            1 Collection Made
          </NavLink>
        </li>
        <li className="user-profile-nav-item">
          <NavLink to={`/users/${user.id}/followed_collections`} activeClassName="selected">
            1 Followed Collection
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default UserProfileNav;