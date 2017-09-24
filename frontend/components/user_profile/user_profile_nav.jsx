import React from 'react';

class UserProfileNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="user-profile-name">
        <ul>
          <li>Upvotes</li>
          <li>Topics</li>
          <li>Collection Made</li>
          <li>Followed Collection</li>
        </ul>
      </div>
    );
  }
}

export default UserProfileNav;