import React from 'react';
import './GridView.css';
import GridViewPoster from './GridViewPoster';

const GridView = ({ movies, routePath }) => {
  return (
    <div className='flex-wrap-movielist mv-grid-fw'>
      {movies.map((movie) => (
        <GridViewPoster key={movie.id} movie={movie} routePath={routePath} />
      ))}
    </div>
  );
};

export default GridView;
