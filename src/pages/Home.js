import React from 'react';
import MovieRow from '../components/MovieRow/MovieRow';
import NowPlaying from '../components/NowPlaying/NowPlaying';
import requests from '../requests';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Banner from '../components/Banner/Banner';

const imagePath = 'https://image.tmdb.org/t/p/original';

const Home = () => {
  return (
    <div>
      <Banner imagePath={imagePath} />
      <MovieRow
        title='Trending Movies'
        fetchUrl={requests.fetchTrending}
        imagePath={imagePath}
        routePath='trending-movies'
      />
      <MovieRow
        title='Upcoming Movies'
        fetchUrl={requests.fetchUpcomingMovies}
        imagePath={imagePath}
        routePath='upcoming-movies'
      />
      <NowPlaying
        title='In Theater (Now Playing)'
        fetchUrl={requests.fetchNowPlaying}
        imagePath={imagePath}
      />
      <MovieRow
        title='Popular Movies'
        fetchUrl={requests.fetchPopularMovies}
        imagePath={imagePath}
        routePath='popular-movies'
      />
    </div>
  );
};

export default Home;
