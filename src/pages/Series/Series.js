import React, { useState, useEffect } from 'react';
import GridView from '../../components/GridView/GridView';
import ListView from '../../components/ListView/ListView';
import TopBarFilter from '../../components/TopBarFilter/TopBarFilter';
import '../Movies/Movie.css';
import requests from '../../requests';
import axios from '../../axios';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';

const Series = () => {
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

      const url = `${requests.fetchTVSereis}&sort_by=${getQuery}&page=${currentPage}`;
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
        return 'first_air_date.desc';
      case 'yearAsc':
        return 'first_air_date.asc';
      case 'popularDesc':
        return 'popularity.desc';
      case 'popularAsc':
        return 'popularity.asc';
      case 'titleDesc':
        return 'original_title.desc';
      case 'titleAsc':
        return 'original_title.asc';
      default:
        return 'first_air_date.desc';
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
              <h1 className='text-white'>Series</h1>
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
                <GridView movies={movies} routePath='series' />
              ) : (
                <ListView movies={movies} routePath='series' />
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

export default Series;
