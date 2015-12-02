import React, { Component } from 'react';
import Router from 'react-router';
import AuthStore from './../../stores/AuthStore';
import AuthActions from './../../actions/AuthActions';
import connectToStores from 'alt/utils/connectToStores';

class Login extends Component {
  static getStores() {
    return [AuthStore];
  }

  static getPropsFromStores() {
    return AuthStore.getState();
  }

  onClickLogin() {
    AuthActions.login({
      username: this.refs.usernameInput.value,
      password: this.refs.passwordInput.value
    });
  }

  render() {
    var divError = (AuthStore.getState().error) ? (<p>{AuthStore.getState().error}</p>) : null;

    return (
      <div>
        <input ref="usernameInput" placeholder="Username" type="text" />
        <input ref="passwordInput" placeholder="Password" type="password" />

        <button onClick={this.onClickLogin.bind(this)} type="button">Login</button>
        {divError}
      </div>
    );
  }
}

export default connectToStores(Login);
