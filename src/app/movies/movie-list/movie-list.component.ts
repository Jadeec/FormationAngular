import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from 'src/app/service/genre.service';
import { MovieService } from 'src/app/service/movie.service';
import { GENRES } from 'src/assets/data/genres.data';
import { MOVIES } from 'src/assets/data/movies.data';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies = MOVIES;
  genres: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private genreService : GenreService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const filterGenre = params.get('genre');
      if (filterGenre) {
        this.movieService.getByGenre(filterGenre).subscribe(movies => this.movies = movies);
      } else {
        this.movieService.getAll().subscribe(movies => this.movies = movies);
      }
    });
    this.genreService.getAll().subscribe((genres) => {
      this.genres = genres;
    })
  }
}
