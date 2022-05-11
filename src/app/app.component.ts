import { Component } from '@angular/core';
import { MOVIES } from 'src/assets/data/movies.data';
import { Movie } from './shared/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-movies';
  movies: Movie[] = MOVIES;

  constructor() {}
}
