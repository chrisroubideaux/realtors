import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/* comonents for the apartment details */
import Nav from '../components/nav/Nav';
import Avatar from '../components/profile/Avatar';
import Footer from '../components/misc/Footer';
//import agents from '../utils/agents';

import axios from 'axios';

const AgentsDetail = () => {
  //  const { agentId } = useParams();
  //  const agent = agents.find((agent) => agent.id === agentId);
  //  const { realtor, bio } = agent;

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
        <title>Dakota Reality/Details</title>
        <meta name="description detail page" content="/" />
      </Helmet>
      <div className="layout">
        <Nav />
        <div className="container-fluid">
          <h1 className=" text-center py-4 fw-bold">{agent.realtor}</h1>
          <div className="row py-4">
            <div className="col-md-6">
              <div className="d-flex">
                <Avatar agents={agent} />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="d-flex justify-content-end p-2 fw-bold py-5">
                {agent.bio}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AgentsDetail;
