import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fw-semibold">
      <div className="container-fluid">
        <Link to="/"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
            <i className="social-icons fas fa-align-right"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link nav-item" to="/">
                <img
                  src="https://pngimg.com/uploads/house/house_PNG63.png"
                  alt=""
                  width="40"
                  height="30"
                />
              </Link>
            </li>
            <li className="nav-item mt-1 m-2">
              <div className="input-group">
                <Link
                  to="/"
                  className="nav-link dropwdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Properties
                  <span className=" m-2">
                    <i className="social-icons fa-solid fa-angle-down mr-1"></i>
                  </span>
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Property">
                      Properties
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Apartment">
                      Apartments
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Condo">
                      Condos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Home">
                      Homes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/TownHouse">
                      Townhouses
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item mt-1">
              <Link className="nav-link" to="/Agent">
                Agents
              </Link>
            </li>
            <li className="nav-item mt-1">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item mt-1">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item mt-1">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
