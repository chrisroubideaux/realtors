import React from 'react';
import { Link } from 'react-router-dom';

//import '../styles/Card.css';

function Homes({ homes }) {
  return (
    <Link className="card-link" to={`/homes/${homes.id}`}>
      <div className="card" style={{ maxWidth: '306px' }}>
        <img className="img" src={homes.image} alt="homes" />
        <div className="card-body postion-relative pb-2">
          <h5 className="mb-1 fs-xs text-uppercase fw-bold">for sale</h5>
          <h6 className=" fw-bold  mb-2">
            <i className=" card-icon fa-solid fa-house-circle-check mt-n1 me-2"></i>
            {homes.rooms} | {homes.sqft} sqft
          </h6>
          <h6 className="fw-bold">
            <i className="card-icon fa-solid fa-money-bill-wave mt-n1 me-2 "></i>
            ${homes.price}
          </h6>

          <h6 className="mb-2 fs-sm fw-bold">
            <i className="card-icon fa-solid fa-location-dot mt-n1 me-2 "></i>
            {homes.location}
          </h6>

          <div className="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
            <span className="d-inline-block">
              <i className="card-icon fa-solid fa-bed m-1"></i>
              {homes.rooms}
            </span>
            <span className="d-inline-block ">
              <i className="card-icon fa-solid fa-shower m-2"></i>
              {homes.bathrooms} bathroom
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Homes;
