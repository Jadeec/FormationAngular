import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from 'src/app/service/actor.service';
import { DirectorService } from 'src/app/service/director.service';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie';
import { DIRECTORS } from 'src/assets/data/directors.data';
import { GENRES } from 'src/assets/data/genres.data';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss'],
})
export class MovieEditComponent implements OnInit {
  formContact: FormGroup | undefined;
  submitted: boolean = false;
  model: Movie | undefined;
  directorsList: string[] = [];
  genres = GENRES;
  actors : string[] = [];
  movie: Movie | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private movieService : MovieService,
    private router : Router,
    private actorService : ActorService,
    private directorService : DirectorService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
          this.movieService.getById(+id).subscribe(data => {
              this.movie = data;
              this.createForm();
          });
      } else {
          this.createForm();
      }
   });
   this.actorService.getAll().subscribe((actors) => {
     this.actors = actors;
   })
   this.directorService.getAll().subscribe((dirctors) => {
     this.directorsList = dirctors;
   })
  }

  createForm() {
    this.formContact = this.formBuilder.group({
      title: [
        this.movie?.title,
        [Validators.required, Validators.minLength(4)],
      ],
      directors: [this.movie?.directors, Validators.required],
      actors: [this.movie?.actors, Validators.required],
      genres: [this.movie?.genres, Validators.required],
      synopsis: [this.movie?.synopsis, Validators.minLength(250)],
    });
  }
  newContact(): void {
    if (this.formContact) this.formContact.reset();
  }

  onSubmit(): void {
    if(this.movie){
    this.movieService.update({...this.movie, ...this.formContact?.value})
    .subscribe(() => {
       this.router.navigate(
             ['/movie', this.movie?.id]
       );
    });

    this.actorService.getAll().subscribe((actors) => {
      this.actors = actors;
    })
  } else {
    this.movieService.add(this.formContact?.value);
  }
    if (this.formContact) console.log('form value :', this.formContact.value);
    this.model = { id: 1, ...this.formContact?.value };
    this.submitted = true;
  }
}
