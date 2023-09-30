import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.webp'

function HomePage() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Cybersecurity Hub</h1>
        <p className="lead">
          Explore the world of cybersecurity and dive deep into the essentials of cybersecurity.
        </p>
        <hr className="my-4" />
        <div className="d-flex justify-content-center">
          <Link to="/login" className="btn btn-secondary btn-lg mx-3">
            Click here to login
          </Link>

          <Link to="/signup" className="btn btn-secondary btn-lg mx-3">
            Click here to signup
          </Link>
        </div>
      </div>
      <div className="jumbotron text-center mt-5">
        <img src={logo} class="img-fluid rounded" alt="..."></img>
      </div>
    </div>
  );
}

export default HomePage;
