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

const Protected = ({component: Component, path, loggedIn, currentUser}) => {
  return (<Route path={path} render={(props) => {
    return (loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      );
      }
    }/>
  );
};

const UserOnly = ({component: Component, path, loggedIn, currentUser}) => {
  return (<Route path={path} render={(props) => {
    return (loggedIn && (currentUser.id === parseInt(props.match.params.userId)) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      );
      }
    }/>
  );
};

const mapStateToProps = state => {
  return { 
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
   };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = connect(mapStateToProps)(Protected);
export const UserRoute = withRouter(connect(mapStateToProps)(UserOnly));