import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import MoviePoster from '../MoviePoster/MoviePoster';
import Slider from 'react-slick';
import './MovieRow.css';
import { NavLink } from 'react-router-dom';

const MovieRow = ({ title, fetchUrl, imagePath, routePath }) => {
  const settings = {
    arrow: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
    ],
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      // console.log('movies ', response.data.results);
      const sliceMovies = response.data.results.slice(0, 12);
      // console.log('slice Movies ', sliceMovies);
      setMovies(sliceMovies);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className='row__title'>{title}</div>
        <NavLink to={routePath} className='row__viewAll'>
          View All<i className='fa fa-angle-right'></i>
        </NavLink>
      </div>
      <div>
        <Slider {...settings}>
          {movies.map((movie) => (
            <MoviePoster
              key={movie.id}
              movie={movie}
              imagePath={imagePath}
              routePath={routePath}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieRow;
