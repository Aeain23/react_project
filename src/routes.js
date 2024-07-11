import Home from './pages/Home';
import Movie from './pages/Movies/Movie';
import Series from './pages/Series/Series';
import NotFound from './pages/NotFound/NotFound';
import MovieDetail from './pages/Movies/MovieDetail';
import SearchResult from './pages/SearchResult/SearchResult';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

const routes = (
  <Router history={history}>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/movies' component={Movie} exact />
      <Route path='/movies/:id' component={MovieDetail} exact />
      <Route path='/series' component={Series} exact />
      <Route path='/series/:id' component={MovieDetail} exact />
      <Route path='/trending-movies/:id' component={MovieDetail} exact />
      <Route path='/upcoming-movies/:id' component={MovieDetail} exact />
      <Route path='/popular-movies/:id' component={MovieDetail} exact />
      <Route path='/search/:id' component={SearchResult} />
      <Route render={() => <NotFound />} />
    </Switch>
  </Router>
);

export default routes;
