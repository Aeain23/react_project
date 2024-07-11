const API_KEY = '4a753da1a51995aae1be225cf6ebee62';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchAllMovies: `/discover/movie?api_key=${API_KEY}`,
  fetchTVSereis: `/discover/tv?api_key=${API_KEY}`,
  fetchSearchMovies: `/search/movie?api_key=${API_KEY}`,
};

export default requests;
