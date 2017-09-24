import React from 'react';
import { withRouter, Redirect } from 'react-router';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.showDropdown = this.showDropdown.bind(this);
    this.handleRedirectToProfile = this.handleRedirectToProfile.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  showDropdown(e) {
    e.stopPropagation();
    let dropdownArray = document.getElementsByClassName("dropdown-content");
    Array.prototype.forEach.call(dropdownArray, (dropdown) => {
      dropdown.className = "dropdown-content";
    });
  }

  handleRedirect(path) {
    return (e) => {
      this.props.history.push(path);
    };
  }

  handleLogout() {
    this.props.logout;
    this.props.history.push("/");
  }
  
  handleRedirectToProfile() {
    let currentUserId = this.props.currentUser.id;
    this.props.history.push(`/users/${currentUserId}`);
    this.props.fetchUser(currentUserId);
  }

  render() {
    let currentUser = this.props.currentUser;
    return (
      <div className="dropdown">
        <div className="user-profile-img-container" onClick={this.showDropdown}>
          <img className="user-profile-img" src="https://res.cloudinary.com/dekgrddbo/image/upload/v1506267278/finn_the_human_bokynk.jpg"/>
        <div className="dropdown-content hide" >
          <ul>
            <li className="dropdown-item" onClick={this.handleRedirectToProfile}>Profile</li>
            <li className="dropdown-item" onClick={this.handleRedirect('/products/new')}>Hunt Product</li>
            <li className="dropdown-item" onClick={this.props.logout}>Log Out</li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dropdown);