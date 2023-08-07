
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from './../actions/favoritesActions.js';

const initialState={
    favorites:[],
    displayFavorites:true
}
// - toggleFavorites : Switches the displayFavorites state value between true and false.
//                     When displayFavorites is true, the favorite button does not show on the Movie page.

// - addFavorites: Adds in a new movie object into the favorites list.
// - removeFavorite: Removes a movie Object from the favorites list with an id passed in.
const favoritesReducer=(state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            const addItem = state.favorites.includes(action.payload)
            if (addItem){
                return state

            }else{
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
                
                
            }
            
        case REMOVE_FAVORITE:
            return{
                ...state,
                favorites:state.favorites.filter(item=>item.id!==action.payload)

            }
        default:
            return(state)
    }

}

export default favoritesReducer;