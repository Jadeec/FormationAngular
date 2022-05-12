import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GENRES } from 'src/assets/data/genres.data';
import { MOVIES } from 'src/assets/data/movies.data';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies = MOVIES;
  genres: string[] = GENRES;
  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const genre = params['genre'];
      this.movies = MOVIES.filter(movie => movie.genres?.some((g) => g === genre));
    });
    
   
  }
}
