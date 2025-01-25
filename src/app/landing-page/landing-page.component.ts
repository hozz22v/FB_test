import { Component } from '@angular/core';
import { SwiperElementComponent } from '../swiper-element/swiper-element.component';
import { CommonModule } from '@angular/common';
import { ImgPathPipe } from '../helpers/img-path.pipe';
import {
  FormControl,
  FormGroup,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SwiperElementComponent, ReactiveFormsModule,CommonModule,ImgPathPipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})

export class LandingPageComponent {
  title = 'FB';
  // BANNER
  banner_title = 'Крупнейшая коллекция природных артефактов';
  banner_text =
    'Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.';
  // SLIDER

  // ARTIFACTS
  art1='artifacts/art1.png';
  art2='artifacts/art2.png';
  art3='artifacts/art3.png';
  art4='artifacts/art4.png';
  art5='artifacts/art5.png';
  art6='artifacts/art6.png';
  art7='artifacts/art7.png';
  artifacts_title = 'Новые артефакты';
  artifacts_article_title = 'Kurische Nehrung 24';
  artifacts_article_text =
    'Вот вам яркий пример современных тенденций - начало повседневной работы по формированию позиции выявляет срочную потребность методов управления процессами. Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.';
  // HELP US
  help_title = 'Помочь проекту';
  help_text =
    'Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.';
  link1: string = 'Каталог';
  link2: string = 'Галерея';
  link3: string = 'О лаборатории';
  link4: string = 'Контакты';
  arrow_icon ='icons/arrow.svg';
  // FORM
  error_format:string='Недопустимый формат';
  
  form: FormGroup = new FormGroup({
    name: new FormControl(null,[
      Validators.required,
      Validators.pattern('^[A-Za-z]+$'),
      Validators.minLength(3),
    ]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email,
      Validators.minLength(8),
    ])
  });

  get email(){
    return this.form.get('email');
  }

  get name(){
    return this.form.get('name');
  }

  onSubmit(event: Event) {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
