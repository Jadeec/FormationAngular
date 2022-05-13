import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/movie';

@Injectable({
  providedIn: 'root',
})
export class DirectorService {
  endPoint = '/api/directors';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  private httpOptions = { headers: this.headers };

  constructor(private http: HttpClient) {}

  getAll(): Observable<string[]> {
    return this.http.get<string[]>(this.endPoint, this.httpOptions);
  }
}
