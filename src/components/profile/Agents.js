import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Card.css';

function Agents({ agents }) {
  return (
    <>
      <Link className="card-link" to={`/agents/${agents.id}`}>
        <div class="card mb-2" style={{ maxWidth: '540px' }}>
          <div class="row g-0">
            <div class="col-sm-4">
              <img src={agents.image} className="avatar mx-3 my-3" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 className="mb-2 fs-xs text-uppercase fw-bold">
                  {agents.name}
                </h5>
                <span className="d-inline-block ">
                  <h6 className=" mb-1 fs-sm fw-bold">
                    <i className="card-icon fa-solid fa-envelope mt-n1 me-2"></i>
                    {agents.email}
                  </h6>
                </span>
                <div
                  className="card-footer d-flex text-nowrap m-auto"
                  style={{ maxWidth: '55rem' }}
                >
                  <span className=" d-inline-block  me-3">
                    <h6 className=" mb-2  fw-bold">
                      <i className="card-icon fa-solid fa-mobile-screen mt-1 me-2 "></i>
                      {agents.phone}
                    </h6>
                  </span>

                  <span className="d-inline-block me-3">
                    <h6 className=" mb-2 fs-sm fw-bold">
                      <i className=" card-icon fa-solid fa-briefcase mt-1 me-2"></i>
                      exp: {agents.expereince}
                    </h6>
                  </span>
                  <span className="d-inline-block me-3">
                    <h6 className=" mb-2 fs-sm fw-bold">
                      <i className=" card-icon fa-brands fa-facebook mt-1 me-2"></i>
                      <i className=" card-icon fab fa-instagram mt-1 me-2"></i>
                      <i className=" card-icon fa-brands fa-tiktok mt-1 me-2"></i>
                    </h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Agents;

// <div>
/* <Link className="card-link" to={`/agents/${agents.id}`}>*/
//<div className="media">
/* <img className="avatar m-4 " src={agents.image} alt="" />*/
/*  <h5 className="fw-bold">{agents.title} </h5>*/
/* <h6 className=" fw-bold">{agents.name}</h6>*/
/* <h6 className="fw-bold">{agents.phone}</h6>*/
/* <h6 className="fw-bold">{agents.email}</h6>*/
//</div>
//</Link>
//</div>
