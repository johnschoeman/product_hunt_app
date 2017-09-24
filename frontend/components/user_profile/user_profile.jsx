import React from 'react';
import UserHeader from './user_header';
import UserProfileNav from './user_profile_nav';
import ProductsIndexContainer from '../products_index/products_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: 1, 
              name: 'null_user', 
              tagline: 'null_user-tagline', 
              image_url: 'https://res.cloudinary.com/dekgrddbo/image/upload/v1506267278/finn_the_human_bokynk.jpg'}
    };
  }

  componentDidMount() {
    console.log('user profile mounted');
    console.log('user profile props', this.props);
    let viewedUserId = this.props.match.params.userId;
    
  }

  render() {
    let user = this.state.user;
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