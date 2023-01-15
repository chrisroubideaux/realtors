import React from 'react';
import { Link } from 'react-router-dom';

function test({ agents }) {
  return (
    <>
      <Link className="card-link" to="/">
        <div class="card mb-2" style={{ maxWidth: '540px' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid "
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 className="mb-2 fs-xs text-uppercase fw-bold">For Rent</h5>

                <div className="card-footer d-flex align-items-center justify-content-center  text-nowrap">
                  <span className="d-inline-block">
                    <i className="card-icon fa-solid fa-bed m-3"></i>
                  </span>
                  <span className="d-inline-block ">
                    <i className="card-icon fa-solid fa-shower m-3"></i>
                  </span>
                  <span className="d-inline-block">
                    <i className="card-icon fa-solid fa-building  m-3"></i>
                  </span>

                  <span className="d-inline-block">
                    <i className="card-icon fa-solid fa-money-bill-wave m-3 "></i>
                  </span>

                  <span className="d-inline-block">
                    <i className="card-icon fa-solid fa-location-dot m-3 "></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default test;
