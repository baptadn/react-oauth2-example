'use strict';

import React from 'react';
import Alt from 'alt';
import ReactDOM  from 'react-dom';
import Router from 'react-router';
import axios from 'axios';
import history from './history';

import routes from './routes';
import AuthActions from './actions/AuthActions';
import AuthStore from './stores/AuthStore';

// Try to connect user from local storage value
AuthActions.localLogin();

// Handle API request errors
axios.interceptors.response.use(response => {
  return response;
}, error => {
  return new Promise((resolve, reject) => {
    if (error.status === 401 && error.data.error_description === 'The access token provided has expired.') {
      AuthActions.refreshToken({initialRequest: error.config, resolve: resolve, reject: reject});
    } else if (error.status === 401 && error.statusText === 'Unauthorized') {
      AuthActions.logout();
    } else {
      reject(error);
    }
  });
});

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('wrapper')
);
