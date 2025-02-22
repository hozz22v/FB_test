import { Component,EventEmitter,Output,Signal,Input, signal } from '@angular/core';
import { SharedService } from '../shared.service';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';
import { NgIf } from '@angular/common';
@Component({
    selector: 'app-modal-element',
    imports: [Test1Component, Test2Component, Test3Component, Test4Component,Test5Component, NgIf],
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

  // TABS

  CurrentTab = signal<number>(1)

  ContentSwitch(tab:number){
    this.CurrentTab.set(tab);
  }
}
