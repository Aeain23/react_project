import React from 'react';
import FallbackImage from '../FallbackImage';
import './ReviewTab.css';
import StarRating from './StarRating';

const ReviewTab = ({ movie, review }) => {
  return (
    <div className='user__review'>
      <div className='user__info'>
        <FallbackImage
          path={review?.author_details?.avatar_path}
          title={review.author}
        />

        <div>
          <StarRating rating={review?.author_details?.rating} />
          <p className='review__date'>
            {review?.updated_at} by <span>{review?.author}</span>
          </p>
        </div>
      </div>
      <p>{review?.content}</p>
    </div>
  );
};

export default ReviewTab;
