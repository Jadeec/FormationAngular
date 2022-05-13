import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
 
  { path: '', 
  loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
   },
   { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  { path: '**', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
