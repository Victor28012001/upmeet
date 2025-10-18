import React from 'react';

export default function UserList({ participants, onTipClick }) {
  return (
    <div className="user-list">
      <h3>Participants</h3>
      <ul>
        {participants.map((user) => (
          <li key={user}>
            {user}
            <button onClick={() => onTipClick(user)}>💸 Tip</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
