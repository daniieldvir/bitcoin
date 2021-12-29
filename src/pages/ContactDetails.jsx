import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoveList from '../cmps/MoveList';
import TransferFund from '../cmps/TransferFund';

import contactService from '../services/contactService';
import { userService } from '../services/userService';

export default class ContactDetails extends Component {
  state = {
    contact: null,
    loggedInUser: null,
  };
  componentDidMount() {
    this.loadContact();
    this.getLoggedInUser();
  }
  async loadContact() {
    const contact = await contactService.getContactById(
      this.props.match.params.id
    );
    this.setState({ contact });
  }

  getLoggedInUser() {
    const user = userService.getUser();
    console.log('user', user);
    this.setState({ loggedInUser: user });
  }

  addMove = (amount, contact) => {
    console.log('addMove det', amount);
    userService.addMove(amount, contact);
    this.props.history.push('/contacts');
  };

  onGoBack = () => {
    this.props.history.push('/contacts');
  };
  render() {
    const { contact, loggedInUser } = this.state;
    if (!contact) return <div>Loading...</div>;

    return (
      <section className="contact-details">
        <h2> {contact.name}</h2>
        <h2> {contact.phone}</h2>
        <h2> {contact.email}</h2>
        <img src={`https://robohash.org/${contact.name}?set=set4`} alt="" />

        <TransferFund addMove={this.addMove} contact={contact} />
        <section>
          <button onClick={this.onGoBack}>Back</button>
          <Link to={`/contact/edit/${contact._id}`}>Edit Contact</Link>
        </section>
      </section>
    );
  }
}
