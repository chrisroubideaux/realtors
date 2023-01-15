import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../../styles/modal.css';
import Select from './Select';

export default function Times({ agents }) {
  return (
    <div className="box list-group w-auto m-2">
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark">
        <img
          src={agents.image}
          className="small-avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
          alt="..."
        />

        <div className="d-flex gap-2 w-100 justify-content-between mt-3 ">
          <div>
            <h6 className=" text-white mb-0">{agents.appointments}</h6>
          </div>

          <small className="opacity-50 text-nowrap text-white">
            <Select agents={agents} />
          </small>
        </div>
      </div>
    </div>
  );
}
