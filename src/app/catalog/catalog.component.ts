import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Init } from 'v8';
import { response } from 'express';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  // ApiService = Inject(TestapiComponent);

  // FORM

  error_format: string = '!';

  apiform: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$'),
      Validators.minLength(3),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });


  ApiSubmit(event: Event) {
    if (this.apiform.valid) {
      // console.log(this.apiform.value);
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          username: this.apiform.value.username,
          password: this.apiform.value.password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  }

  get username() {
    return this.apiform.get('username');
  }

  get password() {
    return this.apiform.get('password');
  }

  // API
  constructor(private http: HttpClient) {}

}
