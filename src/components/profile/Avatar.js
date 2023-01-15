import React from 'react';

function Avatar({ agents }) {
  return (
    <div className="media w-100">
      <h3 className=" mb-2 fs-sm fw-bold">{agents.title}</h3>
      <h3 className=" text-muted fw-bold">{agents.name}</h3>

      <img
        src={agents.image}
        alt="mls"
        className="profile "
        style={{ maxWidth: '540px' }}
      />

      <div className="container-fluid py-3">
        <h4 className=" mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-mobile-screen mt-n1 me-2"></i>
          {agents.phone}
        </h4>
        <h5 className=" mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-envelope mt-n1 me-2"></i>
          {agents.email}
        </h5>
        <h5 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-briefcase mt-n1 me-2"></i>
          Years Active: {agents.expereince}
        </h5>
      </div>
    </div>
  );
}

export default Avatar;
