import React from 'react';
import {data} from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import {addMovies,setShowFavourites} from '../actions'
class App extends React.Component {

  componentDidMount(){

    const { store } = this.props;

    store.subscribe(() => {

      console.log("updated");
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));


  }

  
  isMovieFavourite = (movie) => {

    const {movies} = this.props.store.getState();
    const {favourites} = movies;

    const index = favourites.indexOf(movie)

    if(index !== -1){

      return true;

    }

    return false;
  }

 onChangeTab = (val) => {

  
    this.props.store.dispatch(setShowFavourites(val));

 }
  render(){

    const { movies } = this.props.store.getState();
    const {list,favourites,showFavourites}  = movies;
    
   const displayMovies = showFavourites ? favourites:list;

   console.log(showFavourites);
  return (

    <div className="App">
       <Navbar/>
       <div className="main">
         <div className="tabs">
           <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
           <div className={`tab ${showFavourites?'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
         </div>
         <div className="list">

           {displayMovies.map((movie,index) => (
             
             <MovieCard 
             movie = {movie} 
             key={`movies-${index}`} 
             dispatch = {this.props.store.dispatch}
             isFavourite = {this.isMovieFavourite(movie)}
             />

           ))}
         </div>
         {displayMovies.length == 0 ?<div className="mo-movies">No movies to display!</div>:null}
       </div>
    </div>
  );
           }
}

export default App;
