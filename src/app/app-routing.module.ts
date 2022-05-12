import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'movie/new',
    component: MovieEditComponent,
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  { path: '**', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
