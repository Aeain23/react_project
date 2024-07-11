import React from 'react';
import './TopBarFilter.css';
// import { usePath } from 'hookrouter';

const TopBarFilter = ({ view, toggleView, totalResults, changeHandler }) => {
  // const activePath = usePath();
  const activePath = '/movies';

  return (
    <div className='col-md-12'>
      <div className='topbar__filter'>
        <p>
          Found <span>{totalResults} movies</span> in total
        </p>
        <label>Sort by:</label>
        {activePath === '/movies' ? (
          <select onChange={changeHandler}>
            <option value='yearDesc'>Date Descending</option>
            <option value='yearAsc'>Date Ascending</option>
            <option value='ratingDesc'>IMDB Rating Descending</option>
            <option value='ratingAsc'>IMDB Rating Ascending</option>
            <option value='titleDesc'>Title Descending</option>
            <option value='titleAsc'>Title Ascending</option>
          </select>
        ) : (
          <select onChange={changeHandler}>
            <option value='yearDesc'>Date Descending</option>
            <option value='yearAsc'>Date Ascending</option>
            <option value='popularDesc'>Popular Descending</option>
            <option value='popularAsc'>Popular Ascending</option>
            <option value='titleDesc'>Title Descending</option>
            <option value='titleAsc'>Title Ascending</option>
          </select>
        )}

        <button className='list' onClick={() => toggleView(false)}>
          <i className={`fa fa-list ${!view && 'active'}`}></i>
        </button>
        <button className='grid' onClick={() => toggleView(true)}>
          <i className={`fa fa-th ${view && 'active'}`}></i>
        </button>
      </div>
    </div>
  );
};

export default TopBarFilter;
