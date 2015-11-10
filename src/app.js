'use strict';

import React from 'react';
import Alt from 'alt';
import ReactDOM  from 'react-dom';
import routes from './routes';
import { Router, Route, Link } from 'react-router';
import AuthActions from './actions/AuthActions';
import AuthStore from './stores/AuthStore';
import history from './history';
import axios from 'axios';

// Try to connect user from local storage value
AuthActions.localLogin();

// Handle API request errors
axios.interceptors.response.use(response => {
  return response;
}, error => {
  var deferred = Promise.defer();

  if (error.status === 401 && error.data.error_description === 'The access token provided has expired.') {
    AuthActions.refreshToken({initialRequest: error.config, deferred: deferred});
  } else if (error.status === 401 && error.statusText === 'Unauthorized') {
    AuthActions.logout();
  } else {
    deferred.reject(error);
  }

  return deferred.promise;
});

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('wrapper')
);
