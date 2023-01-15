import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
/* components for the home details */
import Nav from '../components/nav/Nav';
import Navbar from '../components/nav/Navbar';
import Homes from '../components/homes/Homes';
import Details from '../components/misc/Details';
import Footer from '../components/misc/Footer';
//import homes from '../utils/homes';
import axios from 'axios';

function Home() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      const { data } = await axios.get('http://localhost:8000/api/homes/');
      setHomes(data);
    };

    fetchHomes();
  }, []);
  return (
    <>
      <Helmet>
        <title>Dakota Realtors/Homes</title>
        <meta name="description realtor web app  listings page" content="/" />
      </Helmet>

      <div className="layout">
        <div className="homes shadow-lg bg-body">
          <Nav />

          <div className="containter text-center py-5">
            <h3 className=" display-4 py-3">Featured Homes</h3>
            <p className="display-6">Find your Dream home today.</p>
          </div>
        </div>

        <div className="container py-5">
          <h1 className="py-4 fw-bold">Homes</h1>
          <Navbar />
          <div className="row py-4">
            <div
              key={homes.id}
              className="row  row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 "
            >
              {homes.map((homes) => (
                <Homes className="py-2" homes={homes} />
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

export default Home;
