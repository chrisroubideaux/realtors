import React from 'react';
//import '../styles/Card.css';

function Amenities({ townhomes }) {
  return (
    <ul className="list-group w-100 pt-2 pb-4 m-4 ">
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-temperature-arrow-down me-2"></i>
        {townhomes.centralAir}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-jug-detergent me-2"></i>
        {townhomes.dishwasher}
      </h6>

      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-burger me-2"></i>
        {townhomes.microwave}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-dumbbell me-2"></i>
        {townhomes.fitnessCenter}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-socks me-2"></i>
        {townhomes.washerAndDryer}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-key me-2"></i>
        {townhomes.security}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-wheelchair me-2"></i>
        {townhomes.handicap}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-paw me-2"></i>
        Pet Friendly: {townhomes.petFriendly}
      </h6>
    </ul>
  );
}

export default Amenities;
