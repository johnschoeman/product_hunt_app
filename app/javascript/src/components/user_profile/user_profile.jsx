import React from 'react';
import UserHeader from './user_header';
import UserProfileNav from './user_profile_nav';
import ProductsIndexContainer from '../products_index/products_index_container';
import ProductAd from '../product_ad/product_ad';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  componentDidMount() {
    let viewedUserId = this.props.match.params.userId;
    this.props.fetchUser(viewedUserId);
  }

  willReceiveProps(nextProps) {

  }

  render() {
    let user = this.props.viewedUser;
    let currentUserId = this.props.currentUserId;
    return (
      <div className="user-profile">
        <UserHeader user={user} currentUserId={currentUserId}/>
        <div className="user-profile-content-container">
          <div className="user-profile-nav-container">
            <UserProfileNav user={user}/>
          </div>
          <div className="user-profile-index-container">
            <ProductsIndexContainer />
          </div>
          <div className="user-profile-ad-container">
            <ProductAd />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;