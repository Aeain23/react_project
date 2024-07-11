import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';
import requests from '../../requests';
import GridView from '../../components/GridView/GridView';
import Pagination from '../../components/Pagination/Pagination';
import '../Movies/Movie.css';
import Loading from '../../components/Loading/Loading';

const SearchResult = () => {
  const getQuery = new URLSearchParams(useLocation().search);

  const query = getQuery.get('name');
  // console.log('search ', getQuery.get('name'));

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const url = `${requests.fetchSearchMovies}&query=${query}&page=${currentPage}`;
      const response = await axios.get(url);
      // console.log('response movies', response.data);
      let data = response.data;
      setMovies([...data.results]);
      setTotalResults(data.total_results);
      setTotalPage(data.total_pages);
      setLoading(false);
    };
    fetchMovies();
  }, [query, currentPage]);

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
              <h1 className='text-white'>Results: {query}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <GridView movies={movies} routePath='movies' />
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

export default SearchResult;
