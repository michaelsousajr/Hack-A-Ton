import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import login_bg from '../images/login_bg.jpg';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
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

    // API calling logic here.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/login');

  };

  return (
    <section className="h-100 gradient-form" style={{ background: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black mb-5">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src={login_bg} style={{ width: '200px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">Sign Up for an Account</h4>
                    </div>
                    <form>
                      <div className="form-outline mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form1">
                          Full Name
                        </label>
                      </div>
                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2">
                          Email Address
                        </label>
                      </div>
                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3">
                          Password
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-4">
                        <button className="btn btn-secondary btn-block fa-lg gradient-1 mb-3 mx-3" type="button" onClick={handleSubmit}>
                          Sign Up
                        </button>
                        <p>Already have an account? <Link to="/login"><a class="text-muted">Login</a></Link> </p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-1">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Why Sign Up?</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
