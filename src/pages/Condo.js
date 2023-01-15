import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
/* components for the condo details */
import Nav from '../components/nav/Nav';
import Navbar from '../components/nav/Navbar';
import Condos from '../components/condos/Condos';
import Details from '../components/misc/Details';
import Footer from '../components/misc/Footer';

//import condos from '../utils/condos';

import axios from 'axios';

function Condo() {
  const [condos, setCondos] = useState([]);

  useEffect(() => {
    const fetchCondos = async () => {
      const { data } = await axios.get('http://localhost:8000/api/condos/');
      setCondos(data);
    };

    fetchCondos();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dakota Realtors/Condos</title>
        <meta name="description realtor web app condos page" content="/" />
      </Helmet>

      <div className="layout">
        <div className="condos shadow-lg bg-body">
          <Nav />

          <div className="containter text-center py-5">
            <h3 className=" display-4 py-3">Condos</h3>
            <p className="display-6">
              Your dream condo is just a few clicks away.
            </p>
          </div>
        </div>

        <div className="container">
          <h1 className="py-4 fw-bold">Condos</h1>
          <Navbar />
          <div className="row py-2">
            <div
              key={condos.id}
              className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 "
            >
              {condos.map((condos) => (
                <Condos className="py-2" condos={condos} />
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

export default Condo;
