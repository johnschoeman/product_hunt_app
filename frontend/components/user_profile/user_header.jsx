import React from 'react';
import { Link } from 'react-router-dom';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user;
    return (
      <div className="user-header">
        <div className="user-header-info">

          <div className="user-header-profile-img-container">
            <img className="user-header-profile-img" src="https://res.cloudinary.com/dekgrddbo/image/upload/v1506105323/ray_charles_headshot_vljkuq.jpg"/>
          </div>

          <div className="user-profile-main-text-contianer">
            <ul>
              <li>
                <div className="user-profile-main-text">
                  <h2>Username</h2>
                  <p>userId</p>
                  <p>user stars</p>
                </div>
              </li>
              <li>User twitter</li>
              <li>User tagline</li>
            </ul>
          </div>
        </div>

        <div className="user-profile-links">
          <Link to={`users/${user.id}/followers`}>Followers</Link>
          <Link to={`users/${user.id}/following`}>Following</Link>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}

export default UserHeader;