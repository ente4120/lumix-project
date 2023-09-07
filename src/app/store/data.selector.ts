import { createSelector } from "@ngrx/store";

export const moviesSelector = createSelector(
    (state: any) => state.data.movies,
    (movies) => movies
)

export const suggestedMoviesSelector = createSelector(
    (state: any) => state.data.movies.slice(0,3),
    (movies) => movies
)