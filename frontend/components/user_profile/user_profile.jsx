import React from 'react';
import UserHeader from './user_header';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <UserHeader />
      </div>
    );
  }
}

export default UserProfile;