import React, { Component } from 'react';

export default class ContactFilter extends Component {
  state = {
    term: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ [field]: value }, () => {
      this.props.onFilter(this.state);
    });
  };
  render() {
    const { term } = this.state;
    return (
      <form className="content-filter">
        <section className="inputs-container">
          <label htmlFor="term">Find a contact: </label>
          <input
            onChange={this.handleChange}
            value={term}
            type="text"
            name="term"
            id="term"
          />
        </section>
      </form>
    );
  }
}
