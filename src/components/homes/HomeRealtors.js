import React from 'react';

function Avatar({ homes }) {
  return (
    <div className="media">
      <h3 className=" mb-2 fs-sm fw-bold">{homes.title}</h3>
      <h3 className=" text-muted fw-bold">{homes.name}</h3>
      <img src={homes.photo} alt="mls" className="profile  " />
      <div className="container py-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-mobile-screen mt-n1 me-2"></i>
          {homes.phone}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-envelope mt-n1 me-2"></i>
          {homes.email}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-briefcase mt-n1 me-2"></i>
          Years Active: {homes.expereince}
        </h6>
      </div>
    </div>
  );
}

export default Avatar;
