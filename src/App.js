import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './jwt/Login';
import Signup from './jwt/Signup';

function App() {
  return (
    <Router>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
