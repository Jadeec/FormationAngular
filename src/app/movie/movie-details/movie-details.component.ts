import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    private movieService: MovieService,
    private router: Router
  ) {}
  movie!: Movie
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieService
        .getById(Number(params.get('id')))
        .subscribe((movie) => (this.movie = movie));
    });
  }

  delete() {
    this.movieService.delete(this.movie?.id).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }
}
