import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from './../actions/movieActions';
import { addFavorite, removeFavorite } from './../actions/favoritesActions'


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const { movies, displayFavorites, addFavorite, deleteMovie, removeFavorite } = props;

    //since the URL is a string ,so we need transfer it to Number type
    const movie = movies.find(movie=>movie.id===Number(id));

    const handleDeleteClick=()=>{
        //所有从Redux Store cope过来的function和variables都必须加props.
        deleteMovie(movie.id)
        removeFavorite(movie.id)
        //返回到历史记录中的'/movies'页面
        push('/movies')
    }

    const handleAddClick=()=>{
        addFavorite(movie)

    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            
                            {displayFavorites && <span className="m-2 btn btn-dark" onClick={handleAddClick}>Favorite</span>}
                            <span className="delete"
                                onClick={handleDeleteClick}
                            ><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps=state=>{
    return {
        movies: state. movieReducer.movies,
        displayFavorites: state.favoritesReducer.displayFavorites
    }
}
export default connect(mapStateToProps, { deleteMovie, addFavorite, removeFavorite })(Movie);