import React from 'react';

export default function MoveList({ moves }) {
  console.log('moves', moves);
  return (
    <div>
      <section className="moves">
        <hr />
        {!moves.length ? ' ' : <h2>Your Last Moves</h2>}

        {moves.map((move) => (
          <div className="moves-det" key={move.to._id + Math.random()}>
            <p>To: {move.to.name} </p>➡<p>Amount: {move.amount} Coins</p>➡
            <p>Sent at: {move.sentAt} </p>{' '}
          </div>
        ))}
      </section>
    </div>
  );
}
