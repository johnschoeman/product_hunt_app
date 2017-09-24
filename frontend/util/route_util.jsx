import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
    )}/>
);

const Protected = ({component: Component, path, match, location, loggedIn, currentUser}) => {
  console.log('in protected', path, match, location, loggedIn, currentUser);
  console.log(location.pathname.split("/"));
  
  return (<Route path={path} match={match} location={location} render={(props) => (
    loggedIn && (currentUser.id === parseInt(location.pathname.split("/")[2])) ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
    )}/>);
};

const mapStateToProps = state => {
  return { 
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
   };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));