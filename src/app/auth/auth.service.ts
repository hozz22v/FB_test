import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  LoginUrl: string = 'https://icherniakov.ru/yt-course/auth/';
  GetUrl:string ='https://jsonplaceholder.typicode.com/posts/';

  private readonly TOKEN_KEY= 'auth_token';

  login(payload: { username: string; password: string }){
    const fd = new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);
    return this.http.post<{token:string}>(`${this.LoginUrl}token`, fd).pipe(
      tap((res)=>{
        localStorage.setItem(this.TOKEN_KEY, res.token);
        this.router.navigate(['/'])
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }



  constructor(private router: Router) {}
}
