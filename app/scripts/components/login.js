import React from 'react';

const Login = React.createClass({
  loginFunction: function(e) {
    e.preventDefault();
    console.log('you clicked me!');
    console.log(this.refs.username, this.refs.password);
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let data = {
      username: username,
      password: password
    };
  },
  render: function() {
    <form>
      <input type="text" placeholder="username" ref="username" />
      <input type="text" placeholder="password" ref="password" />
      <button onClick={this.loginFunction}>log in</button>
    </form>
  }
});

export default Login
