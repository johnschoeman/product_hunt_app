import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  loginDemoUser() {
    this.setState( {username: "product_hunt_demo", password: "password"} );
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  render() {
    let header = "log in";
    let demoUserBtn = null;
    if (this.props.formType === 'login') {
      header = "Log In";
      demoUserBtn = <button onClick={this.loginDemoUser} >Demo Log In</button>
    } else {
      header = "Sign Up";
    }

    return(
      <div className="session-form form">
        <h1>{header}</h1>

        <ul>
          {this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))}
        </ul>

        <form onSubmit={this.handleSubmit} >
          <label>Username
            <input type="text"
                   onChange={this.update('username')}
                   value={this.state.username}>
            </input>
          </label>
          <br/>
          <label>Password
            <input type="password"
                   onChange={this.update('password')}
                   value={this.state.password}>
            </input>
          </label>
          <br/>
          <input type="submit" value={header}></input>
        </form>
          {demoUserBtn}
      </div>

    );
  }
}

export default withRouter(SessionForm);