import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; 
import login_bg from '../images/login_bg.jpg';


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

    navigate('/');

  };

  return (
    <section class="h-100 gradient-form" style={{ background: '#eee' }}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black mb-5">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <img src={login_bg} style={{ width: '200px' }} alt="logo" />
                    <h4 class="mt-1 mb-5 pb-1">Welcome To The Login Page</h4>
                  </div>
                  <form>  
                    <div class="form-outline mb-3">
                      <input type="email" id="form1" class="form-control"
                        placeholder="Phone number or email address" />
                      <label class="form-label" for="form1">Username</label>
                    </div>
                    <div class="form-outline mb-3">
                      <input type="password" id="form2" class="form-control" />
                      <label class="form-label" for="form2">Password</label>
                    </div>
  
                    <div class="text-center pt-1 mb-5 pb-1">
                      <button class="btn btn-secondary btn-block fa-lg gradient-1 mb-3 mx-3" type="button">Login</button>
                      <Link to="/signup"><a class="text-muted">Forgot password?</a></Link>
                    </div>
                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <Link to="/signup"><button type="button" class="btn btn-outline-secondary">Create new account</button></Link>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-1">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">Why Learn Cybersecurity now</h4>
                  <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
export default Login;
