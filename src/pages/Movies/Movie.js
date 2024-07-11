import React, { useState, useEffect } from 'react';
import GridView from '../../components/GridView/GridView';
import ListView from '../../components/ListView/ListView';
import TopBarFilter from '../../components/TopBarFilter/TopBarFilter';
import './Movie.css';
import requests from '../../requests';
import axios from '../../axios';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';

const Movie = () => {
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(true);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const getQuery = renderSwitch(query);

      const url = `${requests.fetchAllMovies}&sort_by=${getQuery}&page=${currentPage}`;
      const response = await axios.get(url);
      //console.log('response movie list ', response.data);
      let data = response.data;
      setMovies([...data.results]);
      setTotalResults(data.total_results);
      setTotalPage(data.total_pages);
      setLoading(false);
    };
    fetchMovies();
  }, [currentPage, query]);

  const renderSwitch = (query) => {
    switch (query) {
      case 'yearDesc':
        return 'primary_release_date.desc';
      case 'yearAsc':
        return 'primary_release_date.asc';
      case 'ratingDesc':
        return 'vote_average.desc';
      case 'ratingAsc':
        return 'vote_average.asc';
      case 'titleDesc':
        return 'original_title.desc';
      case 'titleAsc':
        return 'original_title.asc';
      default:
        return 'primary_release_date.desc';
    }
  };

  const toggleView = (value) => {
    setView((state) => {
      return value;
    });
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const previousPage = () => {
    if (movies && currentPage !== 1) {
      setCurrentPage((number) => {
        return number - 1;
      });
    }
  };

  const nextPage = () => {
    if (movies && currentPage < totalPage) {
      setCurrentPage((number) => {
        return number + 1;
      });
    }
  };

  return (
    <div className='container'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='row movie__row'>
            <div className='col-12'>
              <h1 className='text-white'>Movies</h1>
            </div>
          </div>
          <div className='row'>
            <TopBarFilter
              view={view}
              toggleView={toggleView}
              totalResults={totalResults}
              changeHandler={changeHandler}
            />
            <div className='col-12'>
              {view ? (
                <GridView movies={movies} routePath='movies' />
              ) : (
                <ListView movies={movies} routePath='movies' />
              )}
            </div>
          </div>
          <div className='row'>
            {totalResults > 20 && (
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                previousPage={previousPage}
                nextPage={nextPage}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
