import React, { Component } from 'react';
import ContactFilter from '../cmps/ContactFilter';
import contactService from '../services/contactService';
import { ContactList } from '../cmps/ContactList';
import { Link } from 'react-router-dom';

export default class ContactPage extends Component {
  state = {
    contacts: null,
    filterBy: '',
  };

  async componentDidMount() {
    await this.loadContacts();
  }

  async loadContacts() {
    const { filterBy } = this.state;
    const contactsToSave = await contactService.getContacts(filterBy);
    this.setState({ contacts: contactsToSave });
  }

  onFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts);
  };
  render() {
    const { contacts } = this.state;
    if (!contacts) return <div>Loading...</div>;
    return (
      <div className="contact-page">
        <h1>Contacts</h1>
        <ContactFilter onFilter={this.onFilter} />
        <Link to="/contact/edit">Add Contact</Link>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
