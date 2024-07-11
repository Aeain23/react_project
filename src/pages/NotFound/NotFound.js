import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  return (
    <div className='row'>
      <div className='col-12 text-center mt-5 mb-5'>
        <img
          src='/404.png'
          alt='404 not found'
          width='504px'
          height='427px'
          className='notfound__img'
        />
        <h4 className='mt-5 not_found'>Oops! This Page is Not Found.</h4>
        <div className='d-block'>
          <button
            onClick={() => history.push('/')}
            className='btn btn-danger iq-button'
            href='/'
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
