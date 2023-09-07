import { createAction } from '@ngrx/store';

export const loadMovies = createAction('[Movies List] Load Movies', (text, page) => ({text, page}));
export const addMovies = createAction('[Movies List] Add Movies', (movies) => ({movies}) );
export const resetMovies = createAction('[Movies List] Reset Movies');