{/* <Switch> 是一个用于包裹 <Route> 组件的容器。它的作用是使得在多个路由规则中，
  只匹配第一个与当前路径匹配的 <Route> 组件。换句话说，一旦找到了匹配的路由，
    <Switch> 就会停止继续匹配其他的路由规则。 */}


import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import MovieList from './MovieList';
import Movie from './Movie';

import MovieHeader from './MovieHeader';

import AddMovieForm from './AddMovieForm';
import FavoriteMovieList from './FavoriteMovieList';

const App = props => {
  const {displayFavorites} = props;

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" >Redux Module Project</span>
      </nav>

      <div className="container">
        <MovieHeader/>
        <div className="row ">
          {displayFavorites && <FavoriteMovieList/>}
        
          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>

            <Route path="/movies/:id">
              <Movie />
            </Route>

            <Route path="/movies">
              <MovieList/>
            </Route>

            <Route path="/">
              <Redirect to="/movies"/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps=state=>{
  return {
    
    displayFavorites: state.favoritesReducer.displayFavorites
  }
}
export default connect(mapStateToProps)(App);