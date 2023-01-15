import React from 'react';

function HomeToolbar({ homes }) {
  return (
    <ul className="nav list-unstyled d-flex py-2 overflow-hidden">
      <li className="nav-item ms-3">
        <h6 className="mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-location-dot mt-n1 me-2 "></i>
          {homes.location}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-bed me-2"></i>
          {homes.rooms}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-shower me-2"></i>
          {homes.bathrooms}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-car me-2"></i>
          {homes.bathrooms}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-building  mt-n1 me-2"></i>
          {homes.sqft} sqft
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className="fw-bold">
          <i className="card-icon fa-solid fa-money-bill-wave mt-n1 me-2 "></i>$
          {homes.price}
        </h6>
      </li>
    </ul>
  );
}

export default HomeToolbar;
