import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
//import Search from '../nav/Search';

function Banner() {
  return (
    <div className="banner">
      <Nav />
      <div className="containter text-center py-5">
        <h3 className=" display-3 py-4">Dakota Realtors</h3>
        <p className="display-6">Your Dream Home is just a few clicks away.</p>
        {/* <Search /> */}

        <div className="container py-3">
          <ul className="nav justify-content-center list-unstyled d-flex py-5">
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <i className="social-icons fab fa-facebook-f m-2"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <i className="social-icons fab fa-instagram m-2 "></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <i className=" social-icons fa-brands fa-youtube m-2"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <i className=" social-icons fa-brands fa-tiktok m-2"></i>
              </Link>
            </li>
          </ul>
          <p className="">© Copyright 2022 Dakota Realtors</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
