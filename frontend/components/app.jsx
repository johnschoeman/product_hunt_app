import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    
    <Route path='/login' component={SessionFormContainer} />
    <Route path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;