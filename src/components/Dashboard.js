import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';

import AuthStore from './../stores/AuthStore';
import AuthActions from './../actions/AuthActions';

export default class Dashboard extends Component {
  onClickLogout() {
    AuthActions.logout();
  }

  render() {
    return (
      <div>
        Connected <button onClick={this.onClickLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
