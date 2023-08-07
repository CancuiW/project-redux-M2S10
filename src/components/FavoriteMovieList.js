import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from './../actions/favoritesActions'

const FavoriteMovieList = (props) => {
    const { favorites, removeFavorite } = props;

//since 'movie.id'is inside the loop,we need get the value from the loop
//-----onClick={() => { handleDelete(movie.id)}}
    const handleDelete=(x)=>{
        removeFavorite(x)

    }
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => { handleDelete(movie.id)}}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps=state=>{
    return {
        favorites:state.favoritesReducer.favorites
    }
}



export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);