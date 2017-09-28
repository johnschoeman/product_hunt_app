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
    this.props.processForm(user).then(this.props.closeModal)
                                .then(() => { this.props.history.push('/'); })
                                .then(() => { this.props.fetchAllProducts(); });
                  
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  loginDemoUser() {
    this.setState( {username: "product_hunt_demo", password: "password"} );
    const user = Object.assign({}, this.state);
    this.props.processForm({username: "product_hunt_demo", password: "password"}).then(this.props.closeModal);
  }

  render() {
    let btnText = undefined;
    let demoUserBtn = null;
    if (this.props.formType === 'login') {
      btnText = "LOG IN";
      demoUserBtn = <button className="orange-button medium-size" onClick={this.loginDemoUser} >Demo Log In</button>
    } else {
      btnText = "SIGN UP";
    }

    return(
      <div className="session-form">
        <div className="session-form-img"></div>
        <h2>Login to Join The Community</h2>
        <p className="intro">Product Hunt is a community to share and geek out about the latest products, books and games. Join us :)</p>

        <ul className="session-errors">
          {this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))}
        </ul>

        <form onSubmit={this.handleSubmit} >
          <div className="form-input-container">
            <div className="form-input">
              <label>Username</label>
                <input type="text"
                      onChange={this.update('username')}
                      value={this.state.username}>
                </input>
            </div>

            <div className="form-input">
              <label>Password</label>
                <input type="password"
                      onChange={this.update('password')}
                      value={this.state.password}>
                </input>
            </div>

            <div className="session-btn-nav">
              <input type="submit" className="orange-button medium-size" value={btnText}></input>
              {demoUserBtn}
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(SessionForm);