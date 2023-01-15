import React from 'react';
//import '../styles/Card.css';

function HomeDetail({ homes }) {
  return (
    <ul className="list-group w-100 pt-2 pb-4 m-4">
      <h5 className="mb-0  p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-building me-2"></i>
        {homes.propertyType}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-dollar-sign me-2"></i>
        {homes.price}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-location-dot me-2"></i>
        Location: {homes.location}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-bed me-2"></i>
        {homes.rooms}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-shower me-2"></i>
        {homes.bathrooms} bath
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-ruler me-2"></i>
        Floor plan: {homes.Flooring}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-toolbox me-2"></i>
        {homes.sqft} sqft
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-door-open me-2"></i>
        {homes.avalibleUnits}Units
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-trowel-bricks me-2"></i>
        Year Built:{homes.yearBuilt}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-car-side me-2"></i>
        {homes.garageCapacity} Garage
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-comments me-2"></i>
        {homes.numReviews} Reviews
      </h5>
    </ul>
  );
}

export default HomeDetail;
