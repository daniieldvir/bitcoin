import React, { Component, createRef } from 'react';
import contactService from '../services/contactService';
import { storageService } from '../services/async-storage.service';

export default class ContactEdit extends Component {
  state = {
    contact: null,
  };
  inputRef = createRef();

  async componentDidMount() {
    const contactId = this.props.match.params.id;
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact();
    this.setState({ contact }, () => this.inputRef.current.focus());
  }
  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }));
  };

  onSaveContent = async (ev) => {
    ev.preventDefault();
    await contactService.saveContact({ ...this.state.contact });
    this.props.history.push('/contacts');
  };
  onGoBack = () => {
    this.props.history.push('/contacts');
  };

  onRemoveContact = async (contactId) => {
    console.log('contactId', contactId);
    console.log('*********');

    await contactService.deleteContact(contactId);
    this.props.history.push('/contacts');
  };

  render() {
    const { contact } = this.state;
    if (!contact) return <div>Loading...</div>;
    return (
      <div className="content-edit">
        <h1> {contact._id ? 'Edit' : 'Add'} Content</h1>

        <section className="content-det">
          <img src={`https://robohash.org/${contact.name}?set=set4`} alt="" />
          <form onSubmit={this.onSaveContent}>
            <label htmlFor="name">Content Name:</label>
            <input
              ref={this.inputRef}
              onChange={this.handleChange}
              value={contact.name}
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="email">Content Email:</label>
            <input
              ref={this.inputRef}
              onChange={this.handleChange}
              value={contact.email}
              type="text"
              name="email"
              id="email"
            />

            <label htmlFor="phone">Content Phone:</label>
            <input
              ref={this.inputRef}
              onChange={this.handleChange}
              value={contact.phone}
              type="text"
              name="phone"
              id="phone"
            />

            <button>Save</button>
          </form>
        </section>
        <section className="btn-nav">
          <button onClick={this.onGoBack}>Back</button>
          <button onClick={() => this.onRemoveContact(contact._id)}>
            Remove Contact
          </button>
        </section>
      </div>
    );
  }
}
