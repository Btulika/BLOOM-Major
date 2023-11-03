// Import necessary components
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import io from "socket.io-client";
import JoinRoom from './JoinRoom';
import Login from './components/Login';
import Users from './components/Users';


const socket = io.connect("http://localhost:3001");

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/room" element={<JoinRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
