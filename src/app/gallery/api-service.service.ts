import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  http: HttpClient = inject(HttpClient);
  GetUrl: string = 'https://jsonplaceholder.typicode.com/posts/';
  IP:string = 'https://ipinfo.io/161.185.160.93/geo';
  constructor() {}

  getFunc() {
    return this.http.get(`${this.GetUrl}`);
  }

  IPapi(){
    return this.http.get(`${this.IP}`);
  }
}
