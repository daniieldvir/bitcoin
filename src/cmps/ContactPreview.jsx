import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

function _ContactPreview({ contact, history }) {
  const contactClicked = () => {
    history.push(`/contact/${contact._id}`);
  };
  return (
    <div onClick={contactClicked} className="contact-preview">
      <p>{contact.name}</p>
      <img src={`https://robohash.org/${contact.name}?set=set4`} alt="" />
    </div>
  );
}

export const ContactPreview = withRouter(_ContactPreview);
