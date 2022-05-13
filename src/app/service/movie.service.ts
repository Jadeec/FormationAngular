import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../shared/movie';

@Injectable()
export class MovieService {
  endPoint = '/api/movies';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  private httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.endPoint, this.httpOptions);
  }

  getById(id: number): Observable<Movie> {
    const url = this.endPoint + '/' + id;

    return this.http.get<Movie>(url, this.httpOptions);
  }

  add(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.endPoint, movie, this.httpOptions);
  }

  update(movie: Movie): Observable<any> {
    return this.http.put(this.endPoint, movie, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = this.endPoint + '/' + id;

    return this.http.delete(url, this.httpOptions);
  }

  getByGenre(genre: string): Observable<Movie[]> {
    //trim all spaces form the input and check if the input is not empty/full of blanks
    //logic "!' ' " in JS equals false / so if gender is false of full of blanks return [];
    if (!genre.trim()) {
      return of([]);
    }

    return this.http.get<Movie[]>(
      this.endPoint + '?genres=' + genre,
      this.httpOptions
    );
  }
}
