import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OveriewTab from './OveriewTab';
import ReviewTab from './ReviewTab';
import CastTab from './CastTab';
import './MovieDetailTab.css';

const MovieDetailTab = ({ movie, reviews, casts }) => {
  const [key, setKey] = useState('overview');
  return (
    <>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} transition={false}>
        <Tab eventKey='overview' title='Overview'>
          <OveriewTab movie={movie} />
        </Tab>
        <Tab eventKey='reviews' title='Reviews'>
          {reviews.map((review) => (
            <ReviewTab key={review.id} movie={movie} review={review} />
          ))}
        </Tab>
        <Tab eventKey='cast' title='Casts'>
          <div className='cast__title'>
            <div className='left'>Name</div>
            <div className='right'>Character</div>
          </div>
          {casts.map((cast) => (
            <CastTab key={cast.id} cast={cast} />
          ))}
        </Tab>
      </Tabs>
    </>
  );
};

export default MovieDetailTab;
