import { Component,EventEmitter,Output,Signal,Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-modal-element',
  standalone: true,
  imports: [],
  templateUrl: './modal-element.component.html',
  styleUrl: './modal-element.component.css'
})
export class ModalElementComponent {
  plantTitle:string='Fig 1. (plant)';
  plantText:string='Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.'
  
  // receivedVisible:boolean = false;

  // constructor(private SharedService: SharedService){}

  // ngOnInit(){
  //   this.SharedService.ModalVisibility.subscribe((Visible)=>{
  //     this.receivedVisible = Visible;
  //   })
  // }
  
  @Output() close = new EventEmitter<void>();


  closeModal(): void {
	this.close.emit();
  }
}
