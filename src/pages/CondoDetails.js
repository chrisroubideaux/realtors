import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/* components for the condo details */
import Nav from '../components/nav/Nav';
import Bookings from '../components/booking/Bookings';
import CondoSlider from '../components/condos/CondoSlider';
import CondoToolbar from '../components/condos/CondoToolbar';
import CondoDetail from '../components/condos/CondoDetail';
import CondoAmenities from '../components/condos/CondoAmenities';
import CondoRealtors from '../components/condos/CondoRealtors';
import Footer from '../components/misc/Footer';

//import condos from '../utils/condos';
import axios from 'axios';

const CondoDetails = () => {
  const { condoId } = useParams();
  // const condo = condos.find((condo) => condo.id === condoId);
  //  const { description, propertyType, realtor, bio } = condo;

  const [condo, setCondo] = useState([]);

  useEffect(() => {
    const fetchCondo = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/condos/${condoId}`
      );
      setCondo(data);
    };

    fetchCondo();
  }, []);

  const { agentId } = useParams();
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    const fetchAgent = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/agents/${agentId}`
      );
      setAgent(data);
    };
    fetchAgent();
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
            <CondoToolbar condos={condo} />
            <div className="row py-2">
              <div className="col-lg-8">
                <CondoSlider condos={condo} />
              </div>

              <div className="col-lg-4">
                <div className="container m-5">
                  <h1 className="fw-bold m-2">{condo.propertyType}</h1>
                  <p className="d-flex justify-content-end fw-bold m-2">
                    {condo.description}
                  </p>
                  <div className="d-flex justify-content-end p-2"></div>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-lg-8">
                <h1 className="fw-bold text-center">Property Details</h1>
                <div className="d-flex justify-content-end p-2">
                  <CondoDetail condos={condo} />
                </div>
              </div>
              <div className="col-lg-4">
                <h1 className="fw-bold text-center">Amenities</h1>
                <div className="d-flex justify-content-end">
                  <CondoAmenities condos={condo} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className=" text-center py-4 fw-bold">{condo.realtor}</h1>
            <div className="row py-4">
              <div className="col-md-6">
                <CondoRealtors condos={condo} />
              </div>

              <div className="col-lg-6">
                <h1 className="fw-bold">Realtor Bio</h1>
                <p className="d-flex justify-content-end p-2 fw-bold mt-5">
                  {condo.bio}
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

export default CondoDetails;
