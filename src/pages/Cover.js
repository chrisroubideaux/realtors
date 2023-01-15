import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../components/misc/Banner';

function Cover() {
  return (
    <>
      <Helmet>
        <title>Dakota Reality</title>
        <meta name="description cover page" content="/" />
      </Helmet>

      <div className="layout">
        <Banner />
      </div>
    </>
  );
}

export default Cover;
