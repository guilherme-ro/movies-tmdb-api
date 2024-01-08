const locaStorageKey = 'favoriteMovies';

function getFavoriteMovies() {
    return JSON.parse(localStorage.getItem(locaStorageKey));
}

function checkMovieIsFavorited(id) {
    const movies = getFavoriteMovies() || [];
    return movies.find(movie => movie.id == id);
  }

function saveToLocalStorage(movie) {
    const movies = getFavoriteMovies() || [];
    movies.push(movie);
    const moviesJSON = JSON.stringify(movies);
    localStorage.setItem(locaStorageKey, moviesJSON);
}

function removeFromLocalStorage(id) {
    const movies = getFavoriteMovies() || [];
    const findMovie = movies.find(movie => movie.id == id);
    const newMovies = movies.filter(movie => movie.id != findMovie.id);
    localStorage.setItem(locaStorageKey, JSON.stringify(newMovies));
}

export const LocalStorage = {
    getFavoriteMovies,
    saveToLocalStorage,
    checkMovieIsFavorited,
    removeFromLocalStorage
  }