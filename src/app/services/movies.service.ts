import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MoviesService {
    URL = 'https://www.omdbapi.com/?type=movie&';
    Token = '994bc2b9'
  
    constructor(private http: HttpClient) { }
  
    getMovies(text: string, page: number) {
        return this.http.get(`${this.URL}s=${text}&page=${page}&apikey=${this.Token}`);
    }
  }