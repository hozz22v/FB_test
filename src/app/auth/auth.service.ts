import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  LoginUrl: string = 'https://icherniakov.ru/yt-course/auth/';
  GetUrl:string ='https://jsonplaceholder.typicode.com/posts/';

  login(payload: { username: string; password: string }){
    const fd = new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);
    return this.http.post(`${this.LoginUrl}token`, fd);
  }

  getFunc(){
    return this.http.get(`${this.GetUrl}1`)
  }

  constructor() {}
}
