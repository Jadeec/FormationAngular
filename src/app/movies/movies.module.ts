import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MovieDetailsComponent } from '../movie/movie-details/movie-details.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [MovieEditComponent, MovieListComponent, MovieCardComponent, MovieDetailsComponent],
  providers: [],
  exports: [],
})
export class MoviesModule {}
