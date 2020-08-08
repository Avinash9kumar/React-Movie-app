import { combineReducers } from 'redux';
import { ADD_MOVIES,
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SET_SHOW_FAVOURITES 
 } from '../actions'

const initialMoviesState = {

    list:[],
    favourites:[],
    showFavourites:false
}
export function movies (state = initialMoviesState ,action){

switch(action.type){

    case ADD_MOVIES:
        return{
            ...state,
            list: action.movies
        }
    case ADD_TO_FAVOURITES:
        return{
            ...state,
            favourites: [action.movie,...state.favourites]
        }
    case REMOVE_FROM_FAVOURITES:

    const filteredArray = state.favourites.filter(
        movie => movie.Title !== action.movie.Title
    );
        
        return{
                ...state,
                favourites: filteredArray
            }

    case SET_SHOW_FAVOURITES:
        return{
            ...state,
            showFavourites : action.val
        }

    default:
        return state;    
}
}


const initialSearchState = {
    result:{}
}

export function Search (state = initialSearchState,action){
    return state;
}

const initialRootState = {
   movies : initialMoviesState,
   Search : initialSearchState
}


// export default function rootReducer (state = initialRootState,action){
//     return{
//         movies : movies(state.movies,action),
//         Search : Search(state.Search,action)
//     }
// }

export default combineReducers({

    movies,
    Search

})