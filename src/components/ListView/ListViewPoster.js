import React from 'react';
import FallbackImage from '../FallbackImage';
import './ListViewPoster.css';
import { releaseDate } from '../../releaseDate';
import { Link } from 'react-router-dom';

const ListViewPoster = ({ movie, routePath }) => {
  const overivew = (str) => {
    if (str) {
      return str.length > 200
        ? str
        : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nobis praesentium explicabo ea aspernatur dolore quisquam quaerat
          neque incidunt. Minima laborum accusantium itaque voluptatem, iusto
          minus perferendis illo laudantium labore`;
    } else {
      return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        nobis praesentium explicabo ea aspernatur dolore quisquam quaerat
        neque incidunt. Minima laborum accusantium itaque voluptatem, iusto
        minus perferendis illo laudantium labore`;
    }
  };
  return (
    <div className='d-flex justify-content-start list__view'>
      <Link to={`/${routePath}/${movie.id}`}>
        <FallbackImage
          path={movie.poster_path}
          title={movie.title || movie.original_title}
        />
      </Link>

      <div>
        <h6>
          <Link to={`/${routePath}/${movie.id}`}>
            {movie.title || movie.original_title || movie.original_name}
          </Link>
        </h6>
        <p className='date'>
          <i className='fa fa-calendar-check-o'></i>
          {releaseDate(movie.release_date, 'DD-MM-YYYY')}
        </p>
        <p className='rate'>
          <span>
            <i className='fa fa-star'></i>
            {movie?.vote_average}/
          </span>
          10
        </p>
        <p className='overview'>{overivew(movie?.overview)}</p>
        <p className='runtime'>
          <span> Run Time:</span> 2 hour 21 mins
        </p>
        <p className='director'>
          <span>Director:</span> Anthony Russo, Joe Russo
        </p>
        <p className='casts'>
          <span>Casts: </span> Chris Evans, Samuel L. Jackson, Scarlett
          Johansson
        </p>
      </div>
    </div>
  );
};

export default ListViewPoster;
