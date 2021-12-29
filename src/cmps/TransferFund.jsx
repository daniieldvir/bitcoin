import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function TransferFund({ addMove, contact }) {
  console.log('addMove transporm');
  var amount;

  const handleChange = ({ target }) => {
    amount = target.value;
  };

  const onAddMove = (ev) => {
    console.log('onAddMove');
    ev.preventDefault();

    if (!amount) return;
    addMove(contact, amount);
  };

  return (
    <div>
      <form>
        <label htmlFor="v">How many coins to move: </label>
        <input
          onChange={handleChange}
          type="number"
          name="username"
          id="username"
          min="0"
        />

        <button onClick={onAddMove}>Send</button>
      </form>
    </div>
  );
}
