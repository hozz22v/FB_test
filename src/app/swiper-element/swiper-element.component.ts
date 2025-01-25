import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ModalElementComponent } from '../modal-element/modal-element.component';
import { ImgPathPipe } from '../helpers/img-path.pipe';
import { Signal } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-swiper-element',
  standalone: true,
  imports: [CommonModule, ModalElementComponent, ImgPathPipe],
  templateUrl: './swiper-element.component.html',
  styleUrl: './swiper-element.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperElementComponent {
  title1 ='Fig 1. (plant)';
  text1 = 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.';
  title2 = 'Fig. 2 (flower)';
  text2='Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.';
  title3 = 'Fig. 3 (leaf)';
  text3='Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.';
  title4='Fig. 4 (wood)';
  text4='Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.';
  // IMG
  card1 = 'slider/card1.png';
  card2 = 'slider/card2.png';
  card3 = 'slider/card3.png';
  card4 = 'slider/card4.png';
  // isModalVisible = signal<boolean>(false);

  // showModal(){
  //   this.isModalVisible.set(true);
  // }

  // constructor(private sharedService: SharedService){}

  // Visible:boolean = false;
  // sendVisibility(){
  //   this.sharedService.ModalShow(this.Visible)
  // }


  // MODAL
  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }
}
