import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GENRES } from 'src/assets/data/genres.data';
import { MOVIES } from 'src/assets/data/movies.data';
import { AuthService } from './service/auth.service';
import { Movie } from './shared/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project-movies';
  movies: Movie[] = MOVIES;
 

  constructor(public authService : AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/movies']);
 }
}
