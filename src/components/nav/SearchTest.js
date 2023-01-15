import React from 'react';
//import { filterData, getFilterValues } from '../utils/filter';

function SearchTest() {
  //  const [filters] = useState(filterData);
  //  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="nav justify-content-center">
      <div className="input-group mb-3 m-1" style={{ width: '18rem' }}>
        <input
          type="text"
          className="form-control bg-transparent text-white fw-bold"
          aria-label="Text input with dropdown button"
          placeholder="Search...Property, City, Zip"
        />

        <button
          className="btn btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon">
            <i className=" social-icon fa-solid fa-magnifying-glass"></i>
          </span>
        </button>

        <ul className="dropdown-menu dropdown-menu-end"></ul>
      </div>
    </div>
  );
}

export default SearchTest;
