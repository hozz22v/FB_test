import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  private scroll = new Subject<void>();

  constructor() {
    this.scroll
      .pipe(debounceTime(2000))
      .subscribe(() => console.log('scrolling / session extended'));
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scroll.next();
  }
}
