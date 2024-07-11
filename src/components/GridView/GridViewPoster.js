import React from 'react';
import { useMobile } from '../../useMobile';
import FallbackImage from '../FallbackImage';
import './GridViewPoster.css';
import { releaseDate } from '../../releaseDate';
import { Link } from 'react-router-dom';

const GridViewPoster = ({ movie, routePath }) => {
  const mobileWitdth = useMobile(767);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  return (
    <div className='gridview__box'>
      {mobileWitdth ? (
        <Link to={`/${routePath}/${movie.id}`}>
          <FallbackImage
            path={movie.poster_path}
            title={movie.title || movie.original_title || movie.original_name}
          />
        </Link>
      ) : (
        <FallbackImage
          path={movie.poster_path}
          title={movie.title || movie.original_title || movie.original_name}
        />
      )}

      {!mobileWitdth && (
        <div className='poster__readmore'>
          <Link to={`/${routePath}/${movie.id}`} className='btn btn-danger'>
            Read More
          </Link>
        </div>
      )}

      <div className='rate'>
        <span>
          <i className='fa fa-star'></i>
          {movie?.vote_average}/
        </span>
        10
      </div>
      <h6>
        {truncate(
          movie.title || movie.original_title || movie.original_name,
          20
        )}
      </h6>

      <div className='date'>
        <i className='fa fa-calendar-check-o'></i>
        {releaseDate(movie.release_date, 'DD-MM-YYYY')}
      </div>
    </div>
  );
};

export default GridViewPoster;
