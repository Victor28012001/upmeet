import React from 'react';

export default function Header({ userAddress }) {
  return (
    <header style={{ padding: '1rem', background: '#1e1e2f', color: '#fff' }}>
      <h1>🎥 UpMeet</h1>
      <p>Wallet: {userAddress || 'Not connected'}</p>
    </header>
  );
}
