import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/movie';
import { MOVIES } from 'src/assets/data/movies.data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private route : ActivatedRoute) { }
  movie : Movie | undefined;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      MOVIES.forEach((movie) => {
        const movieId = movie.id.toString();
        if (movieId == id) {
         this.movie = movie;
        }
      });
    });
  }
   
  }

