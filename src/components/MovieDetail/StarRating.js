import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='star__rating'>
      {number.map((n, index) => {
        return (
          <i
            key={index}
            className={`fa fa-star ${
              n <= Math.floor(rating) ? 'rating' : 'no-rating'
            }`}
          ></i>
        );
      })}
    </div>
  );
};

export default StarRating;
