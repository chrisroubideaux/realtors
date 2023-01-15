import React from 'react';

function Promos() {
  return (
    <div className="container">
      <div className="container">
        <h2 className=" display-3  text-center py-4">Voted # one</h2>
      </div>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block mx-lg-auto img-fluid"
              alt="img"
              width="600"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold lh-1 mb-3">
              Looking for your dream home? we can help you!
            </h2>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris,
              quis aliquet nisl nunc vel mauris. Sed euismod, nunc vel tincidunt
              lacinia, nisl nisl aliquam mauris, quis aliquet nisl nunc vel
              mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promos;
