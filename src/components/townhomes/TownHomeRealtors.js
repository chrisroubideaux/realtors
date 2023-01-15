import React from 'react';

function Avatar({ townhomes }) {
  return (
    <div className="media">
      <h3 className=" mb-2 fs-sm fw-bold">{townhomes.title}</h3>
      <h3 className=" text-muted fw-bold">{townhomes.name}</h3>
      <img src={townhomes.photo} alt="mls" className="profile  " />
      <div className="container py-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-mobile-screen mt-n1 me-2"></i>
          {townhomes.phone}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-envelope mt-n1 me-2"></i>
          {townhomes.email}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-briefcase mt-n1 me-2"></i>
          Years Active: {townhomes.expereince}
        </h6>
      </div>
    </div>
  );
}

export default Avatar;
