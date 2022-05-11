import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/shared/movie';
import { DIRECTORS } from 'src/assets/data/directors.data';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  formContact: FormGroup | undefined;
  submitted: boolean = false;
  model: Movie | undefined;
  directorsList = DIRECTORS;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formContact = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      directors: ['', Validators.required],
      actors: ['', Validators.required],
      genres: ['', Validators.required],
      synopsis: ['',Validators.minLength(250)],
    });
  }
  newContact(): void {
    if (this.formContact) this.formContact.reset();
  }

  onSubmit(): void {
    if (this.formContact) console.log('form value :', this.formContact.value);
    this.model = {id:1,...this.formContact?.value};
    this.submitted = true;
  }
}
