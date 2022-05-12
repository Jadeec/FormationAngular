import { Component, OnInit } from '@angular/core';
import { GENRES } from 'src/assets/data/genres.data';
import { MOVIES } from 'src/assets/data/movies.data';
import { Movie } from './shared/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project-movies';
  movies: Movie[] = MOVIES;
 

  constructor() {}

  ngOnInit(): void {}
}
