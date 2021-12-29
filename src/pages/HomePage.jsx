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
    // console.log('user', !user?.length);
    if (!user || Array.isArray(user)) {
      console.log('LOgged out');
      this.props.history.push('/login');
      return;
    }
    // console.log(user);
    this.setState({ user }, () => {
      this.getBTCRate();
    });
  }
  get btcValue() {
    console.log(this.state.BTC);
    if (this.state.BTC) return this.state.BTC;
    return 0;
  }

  getBTCRate = async () => {
    const BTC = await bitcoinService.getRate();
    this.setState({ BTC: BTC });
  };
  render() {
    const { user } = this.state;
    console.log(user);
    if (!user || Array.isArray(user)) return <div>Lodging...</div>;
    return (
      <section className="home-page">
        <h1>Welcome</h1>
        <p>User Name: {user.name}</p>
        <p>Balance: {user.coins} $</p>
        {/* <p>BTC: {this.btcValue}</p> */}
        <img src={`https://robohash.org/${user.name}?set=set4`} alt="" />
        <MoveList moves={user.moves} />
      </section>
    );
  }
}
