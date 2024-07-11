import React from 'react';
import './ListView.css';
import ListViewPoster from './ListViewPoster';

const ListView = ({ movies, routePath }) => {
  return (
    <div>
      {movies.map((movie) => (
        <ListViewPoster key={movie.id} movie={movie} routePath={routePath} />
      ))}
    </div>
  );
};

export default ListView;
