import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/Form.css';

function Register() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="sign up page" />
      </Helmet>

      <div className=" text-center py-5">
        <Link to="/" className="nav-item">
          <img
            className="mb-4"
            src="https://pngimg.com/uploads/house/house_PNG55.png"
            alt=""
            width="72"
            height="57"
          />
        </Link>

        <h2 className="fw-bold">Create your Account</h2>

        <form className="form text-center">
          <input
            className="form-control m-2 fw-bold"
            required
            type="name"
            placeholder="Enter name"
          />
          <input
            className="form-control m-2 fw-bold"
            required
            type="email"
            placeholder="Enter Email"
          />
          <input
            className="form-control m-2 fw-bold"
            required
            type="password"
            placeholder="Enter Password"
          />
          <input
            className="form-control m-2 fw-bold"
            required
            type="password"
            placeholder="Confirm Password"
          />
          <div className="container">
            <button className="w-100 btn btn-md" type="submit" to="">
              Sign up
            </button>
          </div>
          <p className="pt-3 fw-bold">Already have an account?</p>
          <Link className="btn btn lg w-75" to="/Login">
            Login
          </Link>
          <p className="mt-5 mb-3 text-muted">&copy; Dakota Realtors, 2022</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
