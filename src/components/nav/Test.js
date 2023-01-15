import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Navbar.css';

const Test = () => {
  return (
    <nav className="navbar navbar-expand-lg">
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
        ></button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link nav-item" to="/"></Link>
            </li>

            <li className="nav-item mt-4 m-2">
              <div className="input-group" style={{ width: '11rem' }}>
                <input
                  type="text"
                  className="form-control bg-transparent text-white fw-bold"
                  aria-label="Text input with dropdown button"
                  placeholder="Rent, Buy"
                />
                <button
                  className="btn btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="">
                    <i className="social-icon fa-solid fa-briefcase"></i>
                  </span>
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      Buy
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item mt-4 m-2">
              <div className="input-group" style={{ width: '11rem' }}>
                <input
                  type="text"
                  className="form-control bg-transparent text-white fw-bold"
                  aria-label="Text input with dropdown button"
                  placeholder="Property Type"
                />
                <button
                  className="btn btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="">
                    <i className="social-icon fa-solid fa-house-chimney-window"></i>
                  </span>
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Property">
                      Listings
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
                    <Link className="dropdown-item" to="/Townhouse">
                      Daily Rentals
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item mt-4 m-2">
              <div className="input-group" style={{ width: '11rem' }}>
                <input
                  type="text"
                  className="form-control bg-transparent text-white fw-bold"
                  aria-label="Text input with dropdown button"
                  placeholder="Price: Max-Min"
                />
                <button
                  className="btn btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="">
                    <i className="social-icon fa-solid fa-money-bill-wave"></i>
                  </span>
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      70,000
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      89,000
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      100,000
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mt-4 m-2">
              <div className="input-group" style={{ width: '11rem' }}>
                <input
                  type="text"
                  className="form-control bg-transparent text-white fw-bold"
                  aria-label="Text input with dropdown button"
                  placeholder="Bedrooms"
                />
                <button
                  className="btn btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="">
                    <i className=" social-icon fa-solid fa-bed"></i>
                  </span>
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      1 Bedroom
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      2 Bedrooms
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      3 Bedrooms
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      4 Bedrooms
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      5 Bedrooms
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mt-4 m-2">
              <div className="input-group" style={{ width: '11rem' }}>
                <input
                  type="text"
                  className="form-control bg-transparent text-white fw-bold"
                  aria-label="Text input with dropdown button"
                  placeholder="Bathrooms"
                />
                <button
                  className="btn btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="">
                    <i className=" social-icon fa-solid fa-bath"></i>
                  </span>
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      1 Bath
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      2 Bath
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      3 Bath
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      4 Bath
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Listings">
                      5 Bath
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mt-1"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Test;
