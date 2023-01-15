import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Card.css';

function Properties({ condos }) {
  return (
    <Link className="card-link" to={`/condos/${condos.id}`}>
      <div className="card" style={{ maxWidth: '306px' }}>
        <img className="img" src={condos.image} alt="apartment" />
        <div className="card-body postion-relative pb-2">
          <h5 className="mb-1 fs-xs text-uppercase fw-bold">For Rent</h5>
          <h6 className=" fw-bold  mb-2">
            <i className="card-icon fa-solid fa-building  mt-n1 me-2"></i>
            {condos.rooms} Condos | {condos.sqft} sqft
          </h6>
          <h6 className="fw-bold">
            <i className="card-icon fa-solid fa-money-bill-wave mt-n1 me-2 "></i>
            ${condos.price}
          </h6>

          <h6 className="mb-2 fs-sm fw-bold">
            <i className="card-icon fa-solid fa-location-dot mt-n1 me-2 "></i>
            {condos.location}
          </h6>

          <div className="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
            <span className="d-inline-block">
              <i className="card-icon fa-solid fa-bed m-1"></i>
              {condos.rooms}
            </span>
            <span className="d-inline-block ">
              <i className="card-icon fa-solid fa-shower m-2"></i>
              {condos.bathrooms} bathroom
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Properties;
