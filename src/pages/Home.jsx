import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const roomId = Math.random().toString(36).substr(2, 5);

  return (
    <div className="home">
      <h2>Welcome to UpMeet</h2>
      <button onClick={() => navigate(`/room/${roomId}`)}>Create a Meeting</button>
      <input placeholder="Enter Room ID" id="join-room" />
      <button onClick={() => {
        const room = document.getElementById('join-room').value;
        navigate(`/room/${room}`);
      }}>Join Meeting</button>
    </div>
  );
}
