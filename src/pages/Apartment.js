import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
/* components for the apartment details */
import Nav from '../components/nav/Nav';
import Navbar from '../components/nav/Navbar';
import Apartments from '../components/apartments/Apartments';
import Details from '../components/misc/Details';
import Footer from '../components/misc/Footer';

//import apartments from '../utils/apartmentData';
import axios from 'axios';

function Apartment() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      const { data } = await axios.get('http://localhost:8000/api/apartments/');
      setApartments(data);
    };

    fetchApartments();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dakota Realtors/Listings</title>
        <meta name="description realtor web app listings page" content="/" />
      </Helmet>

      <div className="layout">
        <div className="apartments shadow-lg bg-body">
          <Nav />

          <div className="containter text-center py-5">
            <h3 className=" display-4 py-3">Featured Apartments</h3>
            <p className="display-6">Find your Dream apartment today.</p>
          </div>
        </div>

        <div className="container py-5">
          <h1 className="py-4 fw-bold"> Featured Apartments</h1>

          <Navbar />
          <div className="row py-2">
            <div
              key={apartments.id}
              className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 "
            >
              {apartments.map((apartments) => (
                <Apartments className="py-2" apartments={apartments} />
              ))}
            </div>
          </div>
        </div>
        <Details />
        <Footer />
      </div>
    </>
  );
}

export default Apartment;
