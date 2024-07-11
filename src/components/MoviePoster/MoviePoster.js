import React from 'react';
import { useMobile } from '../../useMobile';
import './MoviePoster.css';
import { Link } from 'react-router-dom';

const MoviePoster = ({ movie, imagePath, routePath }) => {
  const mobileWitdth = useMobile(767);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className='poster__box'>
      {mobileWitdth ? (
        <Link to={`/${routePath}/${movie.id}`}>
          <img
            src={`${imagePath}/${movie?.backdrop_path}`}
            alt={movie.title}
            className='poster__img'
          />
        </Link>
      ) : (
        <img
          src={`${imagePath}/${movie?.backdrop_path}`}
          alt={movie.title}
          className='poster__img'
        />
      )}
      <div className='poster__description'>
        <h6>{truncate(movie.title || movie.original_title, 20)}</h6>
        <span>
          <i className='fa fa-star'></i>
          {movie?.vote_average}/
        </span>
        10
        {!mobileWitdth && (
          <div className='poster__readmore'>
            <Link to={`/${routePath}/${movie.id}`} className='btn btn-danger'>
              Read More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePoster;
