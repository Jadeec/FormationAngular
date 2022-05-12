import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [
    MovieEditComponent,
    MovieEditComponent,
    MovieEditComponent,
    MovieCardComponent,
  ],
  providers: [],
  exports: [],
})
export class MoviesModule {}
