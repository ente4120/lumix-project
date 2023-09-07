import { createReducer, on } from '@ngrx/store';
import { loadMovies, addMovies, resetMovies } from './data.actions';

export const initialState = {
  text: '',
  movies: []
};

export const dataReducer = createReducer(
  initialState,
  on(loadMovies, (state, { text } ) => ({
    ...state,
    text: text
  })),
  on(addMovies, (state, { movies } ) => ({
    ...state,
    movies: state.movies.concat(movies),
  })),
  on(resetMovies, (state) => ({
    ...state,
    text: '',
    movies: []
  }))
);