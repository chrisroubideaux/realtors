import { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import Test from '../components/nav/Test';
import Properties from '../components/properties/Properties';
import Pagination from '../components/nav/Pagination';
import Promos from '../components/misc/Promos';
import Details from '../components/misc/Details';
import Footer from '../components/misc/Footer';
import properties from '../utils/data';
//import {listProperties} from '../actions/propertyActions';

function Search() {
  const [keyword, setKeyword] = useState('');

  let history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <>
      <Helmet>
        <title>Listings</title>
        <meta name="description search page realtors react-app" content="/" />
        <meta name="keywords" content="realtors, real estate, realty" />

        <link rel="stylesheet" href="../styles/Card.css" />
      </Helmet>
      <div className="layout">
        <div className="listings shadow-lg bg-body">
          <Nav />

          <div className="containter text-center">
            <h3 className=" display-4 py-3">Featured Listings</h3>
            <p className="display-6">Helping people find their dream home.</p>
          </div>
        </div>

        <div className="py-4">
          <div className="container">
            <h1 className="fw-bold py-4">Featured Listings</h1>
            <Test />
            {/* <Search bar /> */}
            <div className="nav justify-content-center">
              <div
                className="input-group mb-3 m-1"
                style={{ width: '18rem' }}
                onSubmit={submitHandler}
              >
                <input
                  type="text"
                  className="form-control bg-transparent text-black fw-bold"
                  aria-label="Text input with dropdown button"
                  placeholder="Search...Property, City, Zip"
                  onChange={(e) => setKeyword(e.target.value)}
                ></input>

                <button
                  className="btn btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="navbar-toggler-icon">
                    <i className=" social-icon fa-solid fa-magnifying-glass"></i>
                  </span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
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
            </div>

            {/* <Grid /> */}

            <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-5">
              {properties.map((properties) => (
                <div key={properties.id} className=" py-4 ">
                  <Properties className="" properties={properties} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Promos />
        <Details />
        <Footer />
        <Pagination />
      </div>
    </>
  );
}
//page={page} pages={pages} keyword={keyword}
export default Search;
