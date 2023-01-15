import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/* components for details page */
import Nav from '../components/nav/Nav';
import Slider from '../components/properties/Slider';
import Toolbar from '../components/properties/Toolbar';
import PropertyDetails from '../components/properties/PropertyDetails';
import Amenities from '../components/properties/Amenities';
import Realtors from '../components/profile/Realtors';
import Footer from '../components/misc/Footer';

import axios from 'axios';
//import properties from '../utils/data';

const Details = () => {
  const { propertyId } = useParams();
  //  const property = properties.find((property) => property.id === propertyId);
  // const [description, propertyType, realtor, bio] = useState([]);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const fetchProperty = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/properties/${propertyId}`
      );
      setProperty(data);
    };

    fetchProperty();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dakota Reality/Details</title>
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
            <Toolbar properties={property} />
            <div className="row py-2">
              <div className="col-lg-8">
                <Slider properties={property} />
              </div>

              <div className="col-lg-4">
                <div className="container m-5">
                  <h1 className="fw-bold m-2">{property.propertyType}</h1>
                  <p className="d-flex justify-content-end fw-bold m-2">
                    {property.description}
                  </p>
                  <div className="d-flex justify-content-end p-2"></div>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-lg-8">
                <h1 className="fw-bold text-center">Property Details</h1>
                <div className="d-flex justify-content-end p-2">
                  <PropertyDetails properties={property} />
                </div>
              </div>
              <div className="col-lg-4">
                <h1 className="fw-bold text-center">Amenities</h1>
                <div className="d-flex justify-content-end">
                  <Amenities properties={property} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className=" text-center py-4 fw-bold">{property.realtor}</h1>
            <div className="row py-4">
              <div className="col-md-6">
                <Realtors properties={property} />
              </div>

              <div className="col-lg-6">
                <p className="d-flex justify-content-end p-2 fw-bold mt-5">
                  {property.bio}
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

export default Details;
