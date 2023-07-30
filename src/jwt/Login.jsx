import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/authenticate', user)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        alert('로그인이 완료되었습니다!');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;
