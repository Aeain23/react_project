import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import Slider from 'react-slick';
import NowPlayingPoster from './NowPlayingPoster';
import './NowPlaying.css';

const NowPlaying = ({ title, fetchUrl, imagePath }) => {
  const settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      const sliceMovies = response.data.results.slice(0, 5);
      setMovies(sliceMovies);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='col-12'>
      <div className='nowplaying__title'>{title}</div>
      <Slider {...settings} className='slider__arrow'>
        {movies.map((movie) => (
          <NowPlayingPoster
            key={movie.id}
            movie={movie}
            imagePath={imagePath}
          />
        ))}
      </Slider>
    </div>
  );
};

export default NowPlaying;
