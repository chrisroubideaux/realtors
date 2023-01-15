import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Nav from '../components/nav/Nav';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description about page realtors react-app" content="/" />
        <link rel="stylesheet" href=".../App.css" />
        <link rel="stylesheet" href=".../styles/Navbar.css" />
        <link rel="stylesheet" href=".../styles/Card.css" />
      </Helmet>
      <div className="layout">
        <div className="contact">
          <Nav />
          <div className="text-center py-4">
            <h3 className="display-3 py-5">Business Hours</h3>
            <div className="cards bg-transparent" style={{ maxWidth: '306px' }}>
              <h5 className="text-white">Monday-Thurs 8am-5pm</h5>
              <h5 className="text-white">Friday 8am-3pm</h5>
              <h5 className="text-white">Phone# 000-000-0000</h5>

              <h6 className="text-white">Email: dakotarealty@gmail.com</h6>
            </div>
            <div claaNamme="container ">
              <ul className="nav justify-content-center list-unstyled d-flex ">
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
            </div>
            <p className="">© Copyright 2022 Dakota Realtors</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
