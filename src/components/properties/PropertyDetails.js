import React from 'react';
//import '../styles/Card.css';

function PropertyDetails({ properties }) {
  return (
    <ul className="list-group w-100 pt-2 pb-4 m-4">
      <h5 className="mb-0  p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-building me-2"></i>
        {properties.propertyType}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-dollar-sign me-2"></i>
        {properties.price}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-location-dot me-2"></i>
        Location: {properties.location}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-bed me-2"></i>
        {properties.rooms}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-shower me-2"></i>
        {properties.bathrooms} bath
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-ruler me-2"></i>
        Floor plan: {properties.Flooring}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-toolbox me-2"></i>
        {properties.sqft} sqft
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-door-open me-2"></i>
        {properties.avalibleUnits} Units
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-trowel-bricks me-2"></i>
        Year Built: {properties.yearBuilt}
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-car-side me-2"></i>
        {properties.garageCapacity} Garage
      </h5>
      <h5 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-comments me-2"></i>
        {properties.numReviews} Reviews
      </h5>
    </ul>
  );
}

export default PropertyDetails;
