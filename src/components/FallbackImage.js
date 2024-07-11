import React from 'react';

const FallbackImage = ({ path, title }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  const imagePath = (path) => {
    if (path && /(http(s?)):\/\//i.test(path)) {
      return path.substring(1);
    }
    return `${imageBaseUrl}${path}`;
  };

  return (
    <div>
      {path ? (
        <img src={imagePath(path)} alt={title} />
      ) : (
        <img src='/fallback.png' height='257px' alt={title} />
      )}
    </div>
  );
};

export default FallbackImage;
