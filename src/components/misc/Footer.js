import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <hr className="hr mt-5 " />
      <footer className="container pt-4 py-5">
        <div className="row py-5">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="https://pngimg.com/uploads/house/house_PNG55.png "
              alt=""
              width="50"
              height="40"
            />
            <small className="d-block mb-3 text-muted">&copy; 2022</small>
          </div>
          <div className="col-6 col-md">
            <h3 className=" fw-bold">Contact</h3>
            <ul className="list-unstyled fw-semibold">
              <li className="">
                <Link className="nav-links" to="/">
                  Realtors
                </Link>
              </li>
              <li className="">
                <Link className="nav-links" to="/">
                  Tours
                </Link>
              </li>
              <li className="">
                <Link className="nav-links" to="/">
                  Open house
                </Link>
              </li>
              <li className="">
                <Link className="nav-links" to="/Register">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h3 className="fw-bold">Media</h3>
            <ul className="list-unstyled">
              <li className="mb-1">
                <i className="social-icons fab fa-facebook-f m-2"></i>
              </li>
              <li className="mb-1">
                <i className="social-icons fab fa-instagram m-2 "></i>
              </li>
              <li className="mb-1">
                <i className=" social-icons fa-brands fa-youtube m-2"></i>
              </li>
              <li className="mb-1">
                <i className=" social-icons fa-brands fa-tiktok m-2"></i>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h3 className="fw-bold">About</h3>
            <ul className="list-unstyled fw-semibold ">
              <li className="">
                <Link className="nav-links" to="/">
                  Team
                </Link>
              </li>
              <li className="">
                <Link className="nav-links" to="/">
                  Locations
                </Link>
              </li>
              <li className="">
                <Link className="nav-links" to="#">
                  Privacy
                </Link>
              </li>
              <li className="">
                <Link className="nav-links" to="/">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
