import React from 'react';
import { Link } from 'react-router-dom';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user;
    console.log(user);
    let UserHeaderButton = undefined;
    if (user.id === this.props.currentUserId) {
      UserHeaderButton = <Link to={`/users/${user.id}/edit`} className="button white-button medium-size">Edit</Link>;
    } else {
      UserHeaderButton = <button onClick={this.followUser} 
                                 className="button white-button medium-size" 
                                  >Follow</button>;
    }
    return (
      <div className="user-header">
        <div className="user-header-info">

          <div className="user-header-profile-img-container">
            <img className="user-header-profile-img" src={user.imageUrl}/>
          </div>

          <div className="">
            <ul className="user-profile-main-text-contianer">
              <li>
                <div className="user-profile-main-text">
                  <p className="user-username">{user.username}</p>
                </div>
              </li>
              <li className="user-userslug">{user.userslug}</li>
              <li className="user-headline">{user.headline}</li>
            </ul>
          </div>
        </div>

        <div className="user-profile-links">
          <Link to={`/users/${user.id}/followers`} className="user-profile-link">
            Followers
            </Link>
          <Link to={`/users/${user.id}/following`} className="user-profile-link">
            Following
          </Link>
          {UserHeaderButton}
        </div>
      </div>
    );
  }
}

export default UserHeader;