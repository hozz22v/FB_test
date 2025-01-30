import { Component, inject } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';

interface CardsGet{
  userId:number,
  id:number,
  title:string,
  body:string,
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  apiService = inject(ApiServiceService)
  http: HttpClient = inject(HttpClient)
  cards:CardsGet[] = [];


  ngOnInit(){
    this.CardsInit();
  }

  CardsInit(){
    this.apiService.getFunc()
    .subscribe((res:any)=>{
      console.log(res);
      this.cards = res;
    })
  }


}
