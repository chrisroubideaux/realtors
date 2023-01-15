import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../components/nav/Nav';
import Features from '../components/misc/Features';
import Footer from '../components/misc/Footer';

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description about page realtors react-app" content="/" />
      </Helmet>
      <div className="layout">
        <div className="about">
          <Nav />
          <div className="containter text-center py-5">
            <h3 className="display-3 py-3">Our Mission</h3>
            <p className="display-6">Helping people find their dream home.</p>
          </div>
        </div>
        <h1 className="text-center fw-bold py-5 display-3">About</h1>
        <div className="container py-5 my-5 ">
          <Features />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
