import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import '../styles/Login.css'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError('All fields are required');
      return false;
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      setError('Invalid email format');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    //API calling logic here.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
          >
            Login
          </Button>
          <button onClick={() => navigate('/')}>Home</button>

        </form>
      </Container>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md">
            <div className="card custom-card">
              <div className="card-header custom-header">
                <h2 className="mb-0">Login</h2>
              </div>
              <div className="card-body">
                {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label custom-label">
                      Email Address
                    </label>
                    <input
                        type="email"
                        className="form-control custom-input"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label custom-label">
                      Password
                    </label>
                    <input
                        type="password"
                        className="form-control custom-input"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                  </div>
                  <button type="submit" className="btn custom-btn btn-block">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
