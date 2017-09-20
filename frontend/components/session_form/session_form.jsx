import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit =  this.handleSubmit.bind(this);
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

  render() {
    let header = "log in";

    if (this.props.formType === 'login') {
      header = "Log In";
    } else {
      header = "Sign Up";
    }

    return(
      <div>
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
      </div>

    );
  }
}

export default withRouter(SessionForm);