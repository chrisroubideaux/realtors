import React from 'react';

function Avatar({ condos }) {
  return (
    <div className="media">
      <h3 className=" mb-2 fs-sm fw-bold">{condos.title}</h3>
      <h3 className=" text-muted fw-bold">{condos.name}</h3>
      <img src={condos.photo} alt="mls" className="profile  " />
      <div className="container py-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-mobile-screen mt-n1 me-2"></i>
          {condos.phone}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-envelope mt-n1 me-2"></i>
          {condos.email}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-briefcase mt-n1 me-2"></i>
          Years Active: {condos.expereince}
        </h6>
      </div>
    </div>
  );
}

export default Avatar;
