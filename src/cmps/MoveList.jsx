import React from 'react';

export default function MoveList({ moves }) {
  console.log('moves', moves);
  return (
    <div>
      <section>
        {!moves.length ? ' ' : <h2>Your Last Moves</h2>}
        <hr />
        {moves.map((move) => (
          <div key={move.to._id + Math.random()}>
            <h3>To {move.to.name} </h3>➡<h3>Amount: {move.amount} Coins</h3>➡
            <h3>Sent at: {move.sentAt} </h3>{' '}
          </div>
        ))}
      </section>
    </div>
  );
}
