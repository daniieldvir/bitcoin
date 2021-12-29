import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { ContactPreview } from './ContactPreview';

export function ContactList({ contacts }) {
  return (
    <div>
      <li className="contact-list">
        {contacts.map((contact) => (
          <ContactPreview contact={contact} key={contact._id} />
        ))}
      </li>
    </div>
  );
}
