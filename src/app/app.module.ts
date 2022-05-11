import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LimitCharacterPipe } from './shared/limit-character.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    LimitCharacterPipe,
    MovieEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
