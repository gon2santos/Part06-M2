
export function getMovieDetail(id) {
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?apikey=${API_key}&i=${id}`)
            .then(response => response.json())
            .then(data => dispatch({type: 'GET_MOVIE_DETAIL', payload: data}))
    };
}

export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id };

}

export function addMovieFavorite(id) {
    return { type: "ADD_MOVIE_FAVORITE", payload: id };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${API_key}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

const API_key = 'a7558858';