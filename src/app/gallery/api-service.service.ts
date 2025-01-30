import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  http: HttpClient = inject(HttpClient);
  GetUrl: string = 'https://jsonplaceholder.typicode.com/posts/';
  constructor() {}

  getFunc() {
    return this.http.get(`${this.GetUrl}`);
  }
}
