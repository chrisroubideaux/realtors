import React from 'react';
//import '../styles/Card.css';

function Amenities({ properties }) {
  return (
    <ul className="list-group w-100 pt-2 pb-4 m-4 ">
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-temperature-arrow-down me-2"></i>
        {properties.centralAir}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-jug-detergent me-2"></i>
        {properties.dishwasher}
      </h6>

      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-burger me-2"></i>
        {properties.microwave}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-dumbbell me-2"></i>
        {properties.fitnessCenter}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-socks me-2"></i>
        {properties.washerAndDryer}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-key me-2"></i>
        {properties.security}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-wheelchair me-2"></i>
        {properties.handicap}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-paw me-2"></i>
        Pet Friendly: {properties.petFriendly}
      </h6>
    </ul>
  );
}

export default Amenities;
