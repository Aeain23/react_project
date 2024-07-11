import React, { useState, useEffect } from 'react';
import GridView from '../../components/GridView/GridView';
import '../Movies/Movie.css';
import '../TrendingMovies/TrendingMovie.css';
import requests from '../../requests';
import axios from '../../axios';
import Loading from '../../components/Loading/Loading';

const UpcomingMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await axios.get(requests.fetchUpcomingMovies);
      let data = response.data;
      setMovies([...data.results]);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <div className='container'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='row movie__row'>
            <div className='col-12'>
              <h1 className='text-white'>Trending Movies</h1>
            </div>
          </div>
          <div className='row' style={{ marginBottom: '15px' }}>
            <div className='col-12 topbar'>
              <p>
                Found <span>{movies.length} movies</span> in total
              </p>
            </div>
            <div className='col-12'>
              <GridView movies={movies} routePath='upcoming-movies' />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UpcomingMovie;
