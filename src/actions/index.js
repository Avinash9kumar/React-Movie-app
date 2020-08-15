export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_TO_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'
export const ADD_MOVIE_TO_LIST = 'addMovieToList'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'


export function addMovies (movies){

    return{

        type:ADD_MOVIES,
        movies
      };
}

export function addFavourite (movie){

  return{

      type:ADD_TO_FAVOURITES,
      movie
    };
}


export function removefromfavourites (movie){

  return{

      type:REMOVE_FROM_FAVOURITES,
      movie
    };
}


export function setShowFavourites (val){

  return{

      type:SET_SHOW_FAVOURITES,
      val
    };
}

export function addMovieToList (movie){

  return{

      type:ADD_MOVIE_TO_LIST,
      movie
    };
}

export function handleMovieSearch(movie){

  const url = `http://www.omdbapi.com/?apikey=cb7bf092&t=${movie}`;

  return function(dispatch){
  fetch(url)
   .then(response => response.json())
   .then(movies => {
        
    console.log('movie',movies);

    dispatch(addMovieSearchResult(movies));
   });
  }
}

export function addMovieSearchResult(movies){

  return{
    type: ADD_SEARCH_RESULT,
    movies
  };

}
