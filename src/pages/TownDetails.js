import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Nav from '../components/nav/Nav';
import Slider from '../components/townhomes/Slider';
import Footer from '../components/misc/Footer';

import townhomes from '../utils/townhomes';

import TownHomeToolbar from '../components/townhomes/TownHomeToolbar';
import TownHomeDetail from '../components/townhomes/TownHomeDetail';
import Amenities from '../components/townhomes/Amenities';
import TownHomeRealtors from '../components/townhomes/TownHomeRealtors';

const TownDetails = () => {
  const { townhomeId } = useParams();
  const townhome = townhomes.find((townhome) => townhome.id === townhomeId);
  const { description, propertyType, realtor, bio } = townhome;

  return (
    <>
      <Helmet>
        <title>Dakota Reality/TownHome Details</title>
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
            <TownHomeToolbar townhomes={townhome} />
            <div className="row py-2">
              <div className="col-lg-8">
                <Slider townhomes={townhome} />
              </div>

              <div className="col-lg-4">
                <div className="container m-5">
                  <h1 className="fw-bold m-2">{propertyType}</h1>
                  <p className="d-flex justify-content-end fw-bold m-2">
                    {description}
                  </p>
                  <div className="d-flex justify-content-end p-2"></div>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-lg-8">
                <h1 className="fw-bold text-center">Property Details</h1>
                <div className="d-flex justify-content-end p-2">
                  <TownHomeDetail townhomes={townhome} />
                </div>
              </div>
              <div className="col-lg-4">
                <h1 className="fw-bold text-center">Amenities</h1>
                <div className="d-flex justify-content-end">
                  <Amenities townhomes={townhome} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className=" text-center py-4 fw-bold">{realtor}</h1>
            <div className="row py-4">
              <div className="col-md-6">
                <TownHomeRealtors townhomes={townhome} />
              </div>

              <div className="col-lg-6">
                <p className="d-flex justify-content-end p-2 fw-bold mt-5">
                  {bio}
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

export default TownDetails;
