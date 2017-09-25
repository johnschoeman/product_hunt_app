import React from 'react';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      headline: "",
      image_url: "",
      userslug: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('user edit form was submitted');
    let currentUser = this.props.currentUser;
    e.preventDefault();
    let user = Object.assign({}, this.state);
    user.id = currentUser.id;
    this.props.editUser(user);
    // .then(this.props.history.push(`/users/${currentUser.id}`))
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    
    return (
      <div className="ue-form-container">
        <h1 className="ue-form-header">Settings</h1>
        <form className="ue-form" onSubmit={this.handleSubmit} >

          <div className="ue-form-input-container" >
            <div className="ue-form-input">
              <label>Name</label>
              <input type="text"
                     onChange={this.update('username')}
                     value={this.state.username}/>
            </div>

            <div className="ue-form-input">
              <label>Headline</label>
              <input type="text"
                     onChange={this.update('headline')}
                     value={this.state.tagline}/>
            </div>

            <div className="ue-form-input">
              <label>Profile Image</label>
              <input type="text"
                     onChange={this.update('image_url')}
                     value={this.state.image_url}/>
            </div>

            </div>

            <div className="ue-form-buttons">
              <input type="submit" className="button orange-button medium-size" value="Update"></input>
            </div>
        </form>
      </div>
    );
  }
}

export default UserEditForm;