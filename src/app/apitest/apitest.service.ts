import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApitestService {
  // http: boolean = Inject(HttpClient);
  // ApiUrl:string = 'http://localhost:55509/';
  // testApi:string ='https://jsonplaceholder.typicode.com/posts';

  // login(payload: { username: string, password: string }): Observable<any> {
  //   return this.http.post(
  //     `${this.ApiUrl}posts`,
  //     payload
  //   );
  // }

  constructor() {}
}
