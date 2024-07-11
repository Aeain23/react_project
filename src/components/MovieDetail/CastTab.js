import React from 'react';
import FallbackImage from '../FallbackImage';
import './CastTab.css';

const CastTab = ({ cast }) => {
  return (
    <div className='cast__box'>
      <div className='left'>
        <FallbackImage
          path={cast?.profile_path}
          title={cast.name || cast.original_name}
        />
        <p className='name'>{cast.name}</p>
      </div>
      <p className='character'>{cast.character}</p>
    </div>
  );
};

export default CastTab;
