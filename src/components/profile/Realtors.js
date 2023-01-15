import React from 'react';

function Avatar({ properties }) {
  return (
    <div className="media" style={{ maxWidth: '540px' }}>
      <img src={properties.photo} alt="mls" className="profile  " />
      <div className="container py-2">
        <h5 className=" mb-2 fs-sm fw-bold">{properties.title}</h5>
        <h6 className=" fw-bold">{properties.name}</h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-mobile-screen mt-n1 me-2"></i>
          {properties.phone}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-envelope mt-n1 me-2"></i>
          {properties.email}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-briefcase mt-n1 me-2"></i>
          Years Active: {properties.expereince}
        </h6>
      </div>
    </div>
  );
}

export default Avatar;
