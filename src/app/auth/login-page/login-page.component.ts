import { Component, HostListener, inject } from '@angular/core';
import { ImgPathPipe } from '../../helpers/img-path.pipe';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { response } from 'express';
import {
  debounce,
  debounceTime,
  delay,
  elementAt,
  filter,
  from,
  map,
  tap,
  toArray,
} from 'rxjs';

@Component({
    selector: 'app-login-page',
    imports: [ReactiveFormsModule, ImgPathPipe, CommonModule],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  error_format = '!';
  authService: AuthService = inject(AuthService);
  card1 = 'slider/card1.png';

  // FORM
  loginform: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  LoginSubmit(event: Event) {
    if (this.loginform.valid) {
      this.authService.login(this.loginform.value).subscribe((res) => {
        console.log(res);
      });
    }
    else{
      console.log('Не удалось войти')
    }
  }

  get username() {
    return this.loginform.get('username');
  }

  get password() {
    return this.loginform.get('password');
  }
  // 

  // RXJS TEST FIELD

  auth_data = ['hozz22v', 'NnQOSZqfTt']

  constructor() {
    from(this.auth_data)
      .pipe(
        delay(1000),
        toArray(),
        tap(values =>{
          this.loginform.patchValue({
            username: values[0].toString(),
            password: values[1].toString(),
          });
        })
      )
      .subscribe((val) => {
        console.log(val);
      });
  }
}
