import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  endPoint = '/api/actors';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  private httpOptions = { headers: this.headers };
  constructor(private http: HttpClient) { }

  getAll(): Observable<string[]> {
    return this.http.get<string[]>(this.endPoint, this.httpOptions);
  }
}
