import React from 'react';
import UserHeader from './user_header';
import UserProfileNav from './user_profile_nav';
import ProductsIndexContainer from '../products_index/products_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user;
    return (
      <div className="user-profile">
        <UserHeader user={user}/>
        <div className="user-profile-content-container">
          <div className="user-profile-nav-container">
            <UserProfileNav user={user}/>
          </div>
          <div className="user-profile-index-container">
            <ProductsIndexContainer />
          </div>
          <div className="user-profile-ad-container">add bar</div>
        </div>
      </div>
    );
  }
}

export default UserProfile;