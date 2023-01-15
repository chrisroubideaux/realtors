import React from 'react';
//import '../styles/Card.css';

function HomeAmenities({ homes }) {
  return (
    <ul className="list-group w-100 pt-2 pb-4 m-4 ">
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-temperature-arrow-down me-2"></i>
        {homes.centralAir}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-jug-detergent me-2"></i>
        {homes.dishwasher}
      </h6>

      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-burger me-2"></i>
        {homes.microwave}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className="card-icons fa-solid fa-dumbbell me-2"></i>
        {homes.fitnessCenter}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-socks me-2"></i>
        {homes.washerAndDryer}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-key me-2"></i>
        {homes.security}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-wheelchair me-2"></i>
        {homes.handicap}
      </h6>
      <h6 className="mb-0 p-3 pb-1 fw-bold">
        <i className=" card-icons fa-solid fa-paw me-2"></i>
        Pet Friendly: {homes.petFriendly}
      </h6>
    </ul>
  );
}

export default HomeAmenities;
