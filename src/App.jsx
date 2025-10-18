// src/App.jsx
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import MeetingRoom from './pages/MeetingRoom';

export default function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/room/:roomId', element: <MeetingRoom /> },
  ]);

  return routes;
}
