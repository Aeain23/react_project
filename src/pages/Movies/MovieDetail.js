import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { releaseDate } from '../../releaseDate';
import { calcTime } from '../../calcTime';
import './MovieDetail.css';
import FallbackImage from '../../components/FallbackImage';
import MovieDetailTab from '../../components/MovieDetail/MovieDetailTab';
import { useYoutube } from '../../useYoutube';
import { useMobile } from '../../useMobile';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const API_KEY = '4a753da1a51995aae1be225cf6ebee62';
const BASE_URL = 'https://api.themoviedb.org/3/';

const MovieDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState('');
  const [reviews, setReviews] = useState([]);
  const [casts, setCasts] = useState([]);
  const { trailerUrl, play, close } = useYoutube(movie);
  const mobileWidth = useMobile(480);

  const opts = {
    height: '645',
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

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`
        ),
        axios.get(
          `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
        ),
      ])
      .then(
        axios.spread((movieResponse, reviewsResponse) => {
          setMovie(movieResponse.data);
          setReviews(reviewsResponse.data.results);
          setCasts([...movieResponse.data.credits.cast]);
          setLoading(false);
        })
      );
  }, [id]);

  const mainContent = (
    <div className='main__content'>
      <h1>{movie.title || movie.original_title}</h1>
      <p>Duartion: {calcTime(movie?.runtime)}</p>
      <p>Release Date: {releaseDate(movie?.release_date)}</p>
      <div className='movie__rate'>
        <div className='rate'>
          <i className='fa fa-star'></i>
          <p>
            <span>{movie.vote_average}</span>/10
            <br />
            <span className='rv'>{movie?.popularity}</span>
          </p>
        </div>
        <div className='geners'>
          {movie && movie?.genres.map((genre) => genre.name).join(', ')}
        </div>
      </div>
      <MovieDetailTab movie={movie} reviews={reviews} casts={casts} />
    </div>
  );

  return (
    <div className='container'>
      {loading ? (
        <Loading />
      ) : (
        <div className='row movie__detail__row'>
          <div className='col-md-4 col-sm-12 col-xs-12'>
            <div className='movie__img'>
              <FallbackImage
                path={movie.poster_path}
                title={
                  movie.title || movie.original_title || movie.original_name
                }
              />

              <div className='movie__btn'>
                <div className='btn__transform transform__vertical red'>
                  <div>
                    <button className='redbtn' onClick={play}>
                      <i className='fa fa-play mr-1'></i> Play Now
                    </button>
                  </div>
                </div>
                <div className='btn__transform transform__vertical'>
                  <div>
                    <button className='yellowbtn' disabled>
                      <i className='fa fa-arrow-down mr-1'></i> Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-sm-12 col-xs-12'>
            {trailerUrl ? (
              <YouTube videoId={trailerUrl} opts={opts} onEnd={close} />
            ) : (
              mainContent
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
