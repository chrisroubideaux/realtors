import React from 'react';
//import '../styles/Card.css';

function TownHomeDetail({ townhomes }) {
  return (
    <ul className="list-group w-100 pt-2 pb-4 m-4">
      <h5 className="mb-0  p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-building me-2"></i>
        {townhomes.propertyType}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-dollar-sign me-2"></i>
        {townhomes.price}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-location-dot me-2"></i>
        Location: {townhomes.location}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-bed me-2"></i>
        {townhomes.rooms}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-shower me-2"></i>
        {townhomes.bathrooms} bath
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-ruler me-2"></i>
        Floor plan: {townhomes.Flooring}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-toolbox me-2"></i>
        {townhomes.sqft} sqft
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-door-open me-2"></i>
        {townhomes.avalibleUnits}Units
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-trowel-bricks me-2"></i>
        Year Built:{townhomes.yearBuilt}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-car-side me-2"></i>
        {townhomes.garageCapacity} Garage
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-comments me-2"></i>
        {townhomes.numReviews} Reviews
      </h5>
    </ul>
  );
}

export default TownHomeDetail;
