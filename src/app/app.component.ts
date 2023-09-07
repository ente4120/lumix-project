import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl } from '@angular/forms';
import { loadMovies, resetMovies } from './store/data.actions';
import { moviesSelector, suggestedMoviesSelector } from './store/data.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  DEFAULT_POSTER = 'https://c8.alamy.com/comp/T9YH1X/blank-missing-poster-template-ready-to-print-T9YH1X.jpg';
  title = 'Lumix-project';
  inputValue = new FormControl('');
  movies$: Observable<any[]>;
  suggestions$: Observable<any[]>;
  page: number = 1;

  constructor(private store: Store<{ data: any }>){
    this.movies$ = store.pipe(select(moviesSelector));
    this.suggestions$ = store.pipe(select(suggestedMoviesSelector));
  }

  ngOnInit(){
    this.inputValue.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(text => {
      this.store.dispatch(resetMovies());
      this.store.dispatch(loadMovies(text, this.page));
    });
  }

  resetSearch() {
    this.inputValue.setValue('');
    this.store.dispatch(resetMovies());
    this.page = 1;
  }

  nextBatch(index: number) {
    if(index == this.page * 5){
      this.page++;
      this.store.dispatch(loadMovies(this.inputValue.value, this.page));
    }
  }
}
