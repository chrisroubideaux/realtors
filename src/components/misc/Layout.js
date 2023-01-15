import React from 'react';
import Properties from '../properties/Properties';
function Layout({ properties }) {
  return (
    <div className="my-5 py-5">
      <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-5">
        {properties.map((properties) => (
          <div key={properties.id} className=" py-4 ">
            <Properties className="" properties={properties} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Layout;
