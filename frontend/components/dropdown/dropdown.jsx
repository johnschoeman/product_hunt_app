import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickState: false
    };
    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('showing dropdown');
    this.setState({clickState: true});
    let dropdownArray = document.getElementsByClassName("dropdown-content");
    Array.prototype.forEach.call(dropdownArray, (dropdown) => {
      dropdown.className = "dropdown-content";
    });
  }

  render() {
    let dropdownClassName = (this.state.clickState) ? "dropdown-content" : "dropdown-content hide";
    return (
      <div className="dropdown">
        <div className="user-profile-image" onClick={this.showDropdown}> hi </div>
        <div className={dropdownClassName} >
          <ul>
            <li className="dropdown-item">Profile</li>
            <li className="dropown-item">Hunt Product</li>
            <li className="dropown-item" onClick={this.props.logout}>Log Out</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;