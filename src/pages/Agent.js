import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../components/nav/Nav';
import Footer from '../components/misc/Footer';
import Agents from '../components/profile/Agents';
//import agents from '../utils/agents';

import axios from 'axios';

function Agent() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      const { data } = await axios.get('http://localhost:8000/api/agents');
      setAgents(data);
    };
    fetchAgents();
  }, []);
  return (
    <>
      <Helmet>
        <title>Agents</title>
        <meta name="description realtors react-app" content="/" />
      </Helmet>
      <div className="layout">
        <div className="agents shadow-lg bg-body">
          <Nav />

          <div className="containter text-center">
            <h3 className=" display-4 text-muted py-3">Meet our Team</h3>
            <p className="display-6">Helping people find their dream home.</p>
          </div>
        </div>
        <div className="py-4">
          <div className="text-center py-3">
            <img
              className="mb-4"
              src="https://pngimg.com/uploads/house/house_PNG31.png"
              alt=""
              width="72"
              height="72"
            />
          </div>
          <h1 className="py-4 fw-bold display-4 text-center">Realtors</h1>

          <div className="container text-center py-4 my-4">
            <div className="row row-cols-1 row-cols-1">
              {agents.map((agents) => (
                <div
                  key={agents.id}
                  className=" col-md-4 col-md-6 col-sm-12 mb-4"
                >
                  <Agents className="" agents={agents} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Agent;
