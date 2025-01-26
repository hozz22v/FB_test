import { Component, inject } from '@angular/core';
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
} from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, ImgPathPipe, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
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
  }

  get username() {
    return this.loginform.get('username');
  }

  get password() {
    return this.loginform.get('password');
  }
  // 
  ngOnInit(){
    this.authService.getFunc().subscribe((res)=>{
      console.log(res)
    });
  }

  // RXJS TEST FIELD

  constructor() {
    from(['hozz22v', 'NnQOSZqfTt'])
      .pipe(
        delay(1000),
        tap(val =>{
          this.loginform.patchValue({username: val.toString()}),
          this.loginform.patchValue({password: val.toString()})
        })
      )
      .subscribe((val) => {
        console.log(val);
      });
  }
}
