import React from 'react';
import './NowPlayingPoster.css';
import { releaseDate } from '../../releaseDate';
import YouTube from 'react-youtube';
import { useYoutube } from '../../useYoutube';
import { useMobile } from '../../useMobile';

const NowPlayingPoster = ({ movie, imagePath }) => {
  const { trailerUrl, play, close } = useYoutube(movie);
  const mobileWidth = useMobile(480);

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  //Mobile size
  if (mobileWidth) {
    opts.height = '300';
  }

  const poster = (
    <div
      style={{ backgroundImage: `url(${imagePath}/${movie?.backdrop_path})` }}
      className='nowplaying__poster'
    >
      <h1 className='nowplaying__poster__title'>
        {movie.title || movie.original_title}
      </h1>
      <p className='release_date'>
        Release Date:
        <span className='ml-2'>{releaseDate(movie.release_date)}</span>
      </p>
      <p className='overview'>{movie.overview}</p>
      <button className='btn btn-danger watch__btn' onClick={play}>
        <i className='fa fa-play mr-1'></i>
        Play Now
      </button>
    </div>
  );
  return (
    <>
      {trailerUrl ? (
        <YouTube videoId={trailerUrl} opts={opts} onEnd={close} />
      ) : (
        poster
      )}
    </>
  );
};

export default NowPlayingPoster;
