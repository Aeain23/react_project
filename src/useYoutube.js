import { useState } from 'react';
import movieTrailer from 'movie-trailer';

export const useYoutube = (movie) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  const play = () => {
    movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
      .then((url) => {
        if (!url) {
          alert("Youtube does'nt support");
        } else {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }
      })
      .catch((error) => console.log(error));
  };

  const close = () => {
    setTrailerUrl('');
  };

  return { trailerUrl, play, close };
};
