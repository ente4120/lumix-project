import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service'; 
import { addMovies, loadMovies } from './data.actions';

@Injectable()
export class dataEffects {

    constructor(private actions$: Actions, private moviesService: MoviesService){}

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovies),
            exhaustMap((({text, page}) => this.moviesService.getMovies(text, page)
                .pipe(
                    map(res =>  addMovies((<any>res).Search ? (<any>res).Search : [])),
                    catchError(() => of({ type: '[Movies List] Movies Loaded Error' }))
                )
            )
        )
  ));
}