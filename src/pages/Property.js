import React, { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';
import Nav from '../components/nav/Nav';
import Navbar from '../components/nav/Navbar';
import Footer from '../components/misc/Footer';
import Properties from '../components/properties/Properties';
import Pagination from '../components/nav/Pagination';
//import properties from '../utils/data';
import Promos from '../components/misc/Promos';
import Details from '../components/misc/Details';

import axios from 'axios';

function Property() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await axios.get('http://localhost:8000/api/properties/');
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <>
      <Helmet>
        <title>Properties</title>
        <meta name="description about page realtors react-app" content="/" />
        <meta name="keywords" content="realtors, real estate, realty" />
      </Helmet>
      <div className="layout">
        <div className="listings shadow-lg bg-body">
          <Nav />

          <div className="containter text-center py-5">
            <h3 className=" display-4 py-3">Featured Listings</h3>
            <p className="display-6">Helping people find their dream home.</p>
          </div>
        </div>
        <div className="container py-5">
          <div className="container py-4">
            <h1 className="fw-bold py-5">Featured Listings</h1>
            <Navbar />

            <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-5">
              {properties.map((properties) => (
                <div key={properties.id} className=" py-2 ">
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
export default Property;
