import React, { Component } from 'react';
import bitcoin from '../images/bitcoin.png';
import { userService } from '../services/userService';

export default class SignupPage extends Component {
  state = {
    username: '',
  };

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ username: value });
  };

  signUp = (ev) => {
    ev.preventDefault();
    userService.signUp(this.state.username);
    this.props.history.push('/');
  };
  render() {
    const { username } = this.state;
    return (
      <div>
        <section className="signup-page">
          <img src={bitcoin} alt="" />
          <h1> Welcome</h1>

          <form>
            <label htmlFor="v">User Name:</label>
            <input
              ref={this.inputRef}
              onChange={this.handleChange}
              value={username}
              type="text"
              name="username"
              id="username"
            />

            <button onClick={this.signUp}>Login</button>
          </form>
        </section>
      </div>
    );
  }
}
