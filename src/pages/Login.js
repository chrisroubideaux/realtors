import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/Form.css';

function Login() {
  return (
    <div className="">
      <Helmet>
        <title>Login</title>
        <meta name="description" content="login page" />
      </Helmet>

      <div className=" text-center py-5">
        <Link to="/" className="nav-item">
          <img
            className="mb-4"
            src="https://pngimg.com/uploads/house/house_PNG63.png"
            alt=""
            width="72"
            height="57"
          />
        </Link>
        <h2 className="fw-bold">Login</h2>

        <p className="">Login into your Account</p>

        <form className="form text-center">
          <input
            className="form-control m-2 fw-bold"
            type="username"
            placeholder="username"
          />
          <input
            className="form-control m-2 fw-bold"
            type="password"
            placeholder="Password"
          />
          <div className="container-fluid pt-2">
            <button className="w-100 btn btn-md" type="submit" to="/profile">
              Login
            </button>
          </div>
        </form>
        <p className="pt-3 fw-bold">Dont have an account? sign up now!</p>
        <Link className="btn btn-md" to="/Register">
          Register
        </Link>
        <p className="mt-5 mb-3 text-muted">&copy; Dakota Realtors, 2022</p>
      </div>
    </div>
  );
}

export default Login;
