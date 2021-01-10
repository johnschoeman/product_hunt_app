import React from 'react';
import Dropdown from '../dropdown/dropdown';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render()  {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;
    let fetchUser = this.props.fetchUser;
    let fetchAllProducts = this.props.fetchAllProducts;
    
    return ( 
      <hgroup className="header-group user-nav">
        <Dropdown logout={logout} 
                  currentUser={currentUser}  
                  fetchUser={fetchUser}
                  fetchAllProducts={fetchAllProducts}/>
      </hgroup> 
      );
    }
  }
  
  export default UserNav;