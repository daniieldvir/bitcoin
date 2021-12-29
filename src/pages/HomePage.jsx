import React, { Component } from 'react';
import { bitcoinService } from '../services/bitcoin.service';
import { userService } from '../services/userService';
import MoveList from '../cmps/MoveList';

export default class HomePage extends Component {
  state = {
    user: null,
    BTC: '',
  };

  componentDidMount() {
    this.loadUser();
  }

  async loadUser() {
    const user = await userService.getUser();
    if (!user) this.props.history.push('/login');
    console.log(user);
    this.setState({ user }, () => {
      this.getBTCRate();
    });
  }

  getBTCRate = async () => {
    const BTC = await bitcoinService.getRate();
    this.setState({ BTC });
  };
  render() {
    const { user, BTC } = this.state;
    if (!user) return <div>Lodging...</div>;
    return (
      <section className="home-page">
        <h1>Welcome</h1>
        <p>User Name: {user.name}</p>
        <p>Balance: {user.coins} $</p>
        <p>BTC: {BTC}</p>
        <img src={`https://robohash.org/${user.name}?set=set4`} alt="" />
        <MoveList moves={user.moves} />
      </section>
    );
  }
}
