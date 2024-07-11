import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import requests from '../../requests';
import YouTube from 'react-youtube';
import { useYoutube } from '../../useYoutube';
import { releaseDate } from '../../releaseDate';
import { useMobile } from '../../useMobile';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = ({ imagePath }) => {
  const [movie, setMovie] = useState([]);
  const { trailerUrl, play, close } = useYoutube(movie);
  const mobileWidth = useMobile(480);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchTopRated);
      const randomBanner = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setMovie(response.data.results[randomBanner]);
    };
    fetchData();
  }, []);

  const opts = {
    height: '600',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  //for mobile
  if (mobileWidth) {
    opts.height = '400';
  }

  const banner = (
    <div className='banner__contents'>
      <h1 className='banner__title'>
        {movie?.title || movie?.name || movie?.orignal_name}
      </h1>
      <p className='release_date'>
        Release Date:
        <span className='ml-2'>{releaseDate(movie?.release_date)}</span>
      </p>
      <div className='banner__buttons'>
        <button className='watch__btn btn btn-danger' onClick={play}>
          <i className='fa fa-play mr-1'></i>
          Play Now
        </button>

        {movie && (
          <Link to={`movies/${movie.id}`} className='banner__button'>
            Read More
          </Link>
        )}
      </div>
      <div className='banner__description'>{movie?.overview}</div>
    </div>
  );

  return (
    <div>
      <header
        className='banner'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${imagePath}/${movie?.backdrop_path})`,
          backgroundPosition: 'center center',
        }}
      >
        {trailerUrl ? (
          <YouTube videoId={trailerUrl} opts={opts} onEnd={close} />
        ) : (
          banner
        )}
      </header>
    </div>
  );
};

export default Banner;
