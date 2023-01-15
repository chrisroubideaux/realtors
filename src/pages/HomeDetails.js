import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/* components for HomeDetails */
import Nav from '../components/nav/Nav';
import HomeSlider from '../components/homes/HomeSlider';
import HomeToolbar from '../components/homes/HomeToolbar';
import HomeDetail from '../components/homes/HomeDetail';
import HomeAmenities from '../components/homes/HomeAmenities';
import HomeRealtors from '../components/homes/HomeRealtors';
import Footer from '../components/misc/Footer';

//import homes from '../utils/homes';
import axios from 'axios';
const HomeDetails = () => {
  //  const { homeId } = useParams();
  //  const home = homes.find((home) => home.id === homeId);
  //  const { description, propertyType, realtor, bio } = home;

  const { homeId } = useParams();
  const [home, setHome] = useState([]);
  useEffect(() => {
    const fetchHome = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/homes/${homeId}`
      );
      setHome(data);
    };
    fetchHome();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dakota Reality/CondoDetails</title>
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
            <HomeToolbar homes={home} />
            <div className="row py-2">
              <div className="col-lg-8">
                <HomeSlider homes={home} />
              </div>

              <div className="col-lg-4">
                <div className="container m-5">
                  <h1 className="fw-bold m-2">{home.propertyType}</h1>
                  <p className="d-flex justify-content-end fw-bold m-2">
                    {home.description}
                  </p>
                  <div className="d-flex justify-content-end p-2"></div>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-lg-8">
                <h1 className="fw-bold text-center">Property Details</h1>
                <div className="d-flex justify-content-end p-2">
                  <HomeDetail homes={home} />
                </div>
              </div>
              <div className="col-lg-4">
                <h1 className="fw-bold text-center">Amenities</h1>
                <div className="d-flex justify-content-end">
                  <HomeAmenities homes={home} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className=" text-center py-4 fw-bold">{home.realtor}</h1>
            <div className="row py-4">
              <div className="col-md-6">
                <HomeRealtors homes={home} />
              </div>

              <div className="col-lg-6">
                <p className="d-flex justify-content-end p-2 fw-bold mt-5">
                  {home.bio}
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

export default HomeDetails;
