import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/* components for the apartment details */
import Nav from '../components/nav/Nav';
import ApartmentSlider from '../components/apartments/ApartmentSlider';
import ApartmentToolbar from '../components/apartments/ApartmentToolbar';
import ApartmentDetail from '../components/apartments/ApartmentDetail';
import ApartmentAmenities from '../components/apartments/ApartmentAmenities';
import ApartmentRealtors from '../components/apartments/ApartmentRealtors';
import Footer from '../components/misc/Footer';

//import apartments from '../utils/apartmentData';
import axios from 'axios';
const ApartmentDetails = () => {
  //  const apartment = apartments.find(
  //    (apartment) => apartment.id === apartmentId
  //  );
  //  const { description, propertyType, realtor, bio } = apartment;

  const { apartmentId } = useParams();

  const [apartment, setApartment] = useState([]);

  useEffect(() => {
    const fetchApartment = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/apartments/${apartmentId}`
      );
      setApartment(data);
    };

    fetchApartment();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dakota Reality/ApartmentDetails</title>
        <meta name="description detail page" content="/" />
      </Helmet>
      <div className="layout">
        <Nav />
        <div className="container py-4">
          <div className="container-fluid">
            <Link className="btn btn-md" to="/">
              back to properties
            </Link>
          </div>

          <div className="py-3">
            <ApartmentToolbar apartments={apartment} />
            <div className="row py-2">
              <div className="col-lg-8">
                <ApartmentSlider apartments={apartment} />
              </div>

              <div className="col-lg-4">
                <div className="container m-5">
                  <h1 className="fw-bold m-2">{apartment.propertyType}</h1>
                  <p className="d-flex justify-content-end fw-bold m-2">
                    {apartment.description}
                  </p>
                  <div className="d-flex justify-content-end p-2"></div>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-lg-8">
                <h1 className="fw-bold text-center">Property Details</h1>
                <div className="d-flex justify-content-end p-2">
                  <ApartmentDetail apartments={apartment} />
                </div>
              </div>
              <div className="col-lg-4">
                <h1 className="fw-bold text-center">Amenities</h1>
                <div className="d-flex justify-content-end">
                  <ApartmentAmenities apartments={apartment} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className=" text-center py-4 fw-bold">{apartment.realtor}</h1>
            <div className="row py-4">
              <div className="col-md-6">
                <ApartmentRealtors apartments={apartment} />
              </div>

              <div className="col-lg-6">
                <p className="d-flex justify-content-end p-2 fw-bold mt-5">
                  {apartment.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ApartmentDetails;
