import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard';

import AuthStore from './stores/AuthStore';

function requireAuth(nextState, replaceState) {
  if (AuthStore.getState().accessToken === null) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
}

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} onEnter={requireAuth} />
    <Route path="login" component={Login} />
  </Route>
);

export default routes;
