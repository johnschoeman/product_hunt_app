import React from 'react';
import Dropdown from '../dropdown/dropdown';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown() {
    console.log('showing dropdown');
  }
    
  render()  {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;
    let fetchUser = this.props.fetchUser;
    
    return ( 
      <hgroup className="header-group user-nav">
        <Dropdown logout={logout} currentUser={currentUser} fetchUser={fetchUser}/>
      </hgroup> 
      );
    }
  }
  
  export default UserNav;
  // <button className="add-product-button" onClick={this.addProduct}>+</button>
  // <button className="notification-seed-button" onClick={this.showNotificaitons}>n</button>