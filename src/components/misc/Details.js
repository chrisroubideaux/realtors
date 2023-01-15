import React from 'react';

function Details() {
  return (
    <div className="container py-5">
      <div className="container">
        <h2 className=" display-3 text-center py-4">
          Why we're trusted the Most
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="d-flex flex-column align-items-start gap-2">
          <h3 className="fw-bold">
            We got you covered with the best realtors in the business.
          </h3>
          <p className="text-muted fw-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, quis
            aliquet nisl nunc vel mauris. Sed euismod, nunc vel tincidunt
            lacinia, nisl nisl aliquam mauris, quis aliquet nisl nunc vel
            mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          <div className="d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
              <i
                className=" bi social-icons fa-solid fa-comments-dollar me-2"
                width="1em"
                height="1em"
              ></i>
            </div>
            <h4 className="fw-semibold mb-0">Sell with confidance</h4>
            <p className="text-muted fw-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
              <i
                className=" bi social-icons fa-solid fa-calendar-days me-2"
                width="2em"
                height="2em"
              ></i>
            </div>
            <h4 className="fw-semibold mb-0">Open House</h4>
            <p className="text-muted fw-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  bg-gradient fs-4 rounded-3">
              <i
                className=" bi social-icons fa-solid fa-people-roof me-2"
                width="1em"
                height="1em"
              ></i>
            </div>
            <h4 className="fw-semibold mb-0">Meet our team</h4>
            <p className="text-muted fw-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
              <i
                className=" bi social-icons fa-solid fa-house-chimney-user me-2"
                width="1em"
                height="1em"
              ></i>
            </div>
            <h4 className="fw-semibold mb-0">Our Mission</h4>
            <p className="text-muted fw-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
