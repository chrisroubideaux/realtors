import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/nav/Navbar';
import Nav from '../components/nav/Nav';
import TownHome from '../components/townhomes/TownHome';
import Footer from '../components/misc/Footer';

import townhomes from '../utils/townhomes';
import Details from '../components/misc/Details';

function TownHouse() {
  return (
    <>
      <Helmet>
        <title>Dakota Realtors/TownHouse</title>
        <meta name="description realtor web app  listings page" content="/" />
      </Helmet>

      <div className="layout">
        <div className="townhomes shadow-lg bg-body">
          <Nav />

          <div className="containter text-center">
            <h3 className=" display-4 py-5">Featured Listings</h3>
            <p className="display-6">Helping people find their dream home.</p>
          </div>
        </div>

        <div className="container py-5">
          <h1 className="py-2 fw-bold">TownHouse</h1>
          <Navbar />
          <div className="row py-2">
            <div
              key={townhomes.id}
              className="row  row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 "
            >
              {townhomes.map((townhomes) => (
                <TownHome className="py-2" townhomes={townhomes} />
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

export default TownHouse;
