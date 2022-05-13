import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MovieDetailsComponent } from '../movie/movie-details/movie-details.component';
import { LimitCharacterPipe } from '../shared/limit-character.pipe';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MoviesRoutingModule],
  declarations: [MovieEditComponent, MovieListComponent, MovieCardComponent, MovieDetailsComponent,LimitCharacterPipe],
  providers: [],
  exports: [],
})
export class MoviesModule {}
