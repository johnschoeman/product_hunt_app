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

          <div className="">
            <ul className="user-profile-main-text-contianer">
              <li>
                <div className="user-profile-main-text">
                  <p className="user-username">Ray Charles</p>
                </div>
              </li>
              <li className="user-twitter">@ray_charles</li>
              <li className="user-tagline">The best there ever was</li>
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