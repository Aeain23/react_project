import React from 'react';
import { Navbar, Nav, Collapse, BImg } from 'bootstrap-4-react';
import './MenuNavbar.css';
import logo from '../../img/logo.png';
import Home from '../../pages/Home';
import Movie from '../../pages/Movies/Movie';
import Series from '../../pages/Series/Series';
import NotFound from '../../pages/NotFound/NotFound';
import TrendingMovie from '../../pages/TrendingMovies/TrendingMovie';
import UpcomingMovie from '../../pages/UpcomingMovies/UpcomingMovie';
import PopularMovie from '../../pages/PopularMovies/PopularMovie';
import MovieDetail from '../../pages/Movies/MovieDetail';
import SearchResult from '../../pages/SearchResult/SearchResult';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';

const MenuNavbar = () => {
  return (
    <>
      <Navbar expand='lg' dark bg='dark'>
        <NavLink to='/' className='navbar-brand'>
          <BImg
            src={logo}
            width='40'
            height='40'
            display='inline-block'
            align='top'
            mr='1'
          />
        </NavLink>

        <Navbar.Toggler target='#navbarSupportedContent' />
        <Collapse navbar id='navbarSupportedContent'>
          <Navbar.Nav mr='auto'>
            <Nav.Item>
              <NavLink to='/movies' className='nav-link'>
                Movies
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/series' className='nav-link'>
                Series
              </NavLink>
            </Nav.Item>
          </Navbar.Nav>
          <SearchForm />
        </Collapse>
      </Navbar>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/movies' component={Movie} exact />
        <Route path='/movies/:id' component={MovieDetail} exact />
        <Route path='/series' component={Series} exact />
        <Route path='/series/:id' component={MovieDetail} exact />
        <Route path='/trending-movies/' component={TrendingMovie} exact />
        <Route path='/trending-movies/:id' component={MovieDetail} exact />
        <Route path='/upcoming-movies/' component={UpcomingMovie} exact />
        <Route path='/upcoming-movies/:id' component={MovieDetail} exact />
        <Route path='/popular-movies/' component={PopularMovie} exact />
        <Route path='/popular-movies/:id' component={MovieDetail} exact />
        <Route path='/search' component={SearchResult} exact />
        <Route render={() => <NotFound />} />
      </Switch>
    </>
  );
};

export default withRouter(MenuNavbar);
