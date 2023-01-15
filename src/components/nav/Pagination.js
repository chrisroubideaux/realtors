import React from 'react';

import { Link } from 'react-router-dom';

function Pagination({ pages, page, keyword = '', isAdmin = false }) {
  if (keyword) {
    keyword = keyword.split('?keyword=')[1].split('&')[0];
  }

  return (
    pages > 1 && (
      <div className="paginate">
        {[...Array(pages).keys()].map((x) => (
          <Link
            className="nav-link"
            key={x + 1}
            to={
              !isAdmin
                ? `/?keyword=${keyword}&page=${x + 1}`
                : `/admin/propertylist/?keyword=${keyword}&page=${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </Link>
        ))}
      </div>
    )
  );
}

export default Pagination;
