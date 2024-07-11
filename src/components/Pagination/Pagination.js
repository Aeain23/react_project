import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pagination.css';

const Pagination = ({ currentPage, totalPage, previousPage, nextPage }) => {
  return (
    <nav className='col-12 mt-5'>
      <p className='pagination__perpage'>
        Page {currentPage} of {totalPage}
      </p>
      <ul className='pagination justify-content-center'>
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <button
            className='page-link'
            onClick={() => previousPage('previous')}
          >
            <span aria-hidden='true' style={{ marginRight: '2px' }}>
              &laquo;
            </span>
            Previous
          </button>
        </li>
        <li className={`page-item ${currentPage === totalPage && 'disabled'}`}>
          <button className='page-link' onClick={() => nextPage('next')}>
            Next
            <span aria-hidden='true' style={{ marginLeft: '2px' }}>
              &raquo;
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
