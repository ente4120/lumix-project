import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { dataReducer } from './store/data.reducer';
import { MoviesService } from './services/movies.service';
import { EffectsModule } from '@ngrx/effects';
import { dataEffects } from './store/data.effects';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    HttpClientModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([dataEffects]),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
