import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/shared/movie';
import { MOVIES } from 'src/assets/data/movies.data';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  full: boolean = false;
  id: string = '';
  genre : Params | undefined;
  @Input() movie!: Movie;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }
}
