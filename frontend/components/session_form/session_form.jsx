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
    this.props.processForm(user).then(
      this.props.history.push('/')
    );
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    let header = "log in";
    let linkUrl = "";
    let linkName = "";

    if (this.props.formType === 'login') {
      header = "Log In";
      linkUrl = "/signup";
      linkName = "SIGN UP";
    } else {
      header = "Sign Up";
      linkUrl = "/login";
      linkName = "LOG IN";
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
        <br/>
        <Link to={linkUrl}>{linkName}</Link>
      </div>

    );
  }
}

export default withRouter(SessionForm);