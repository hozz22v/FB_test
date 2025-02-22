import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ImgPathPipe } from '../helpers/img-path.pipe';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-layout-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    ImgPathPipe,
    CommonModule,
    NgClass,
    RouterOutlet,
  ],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.css',
})
export class LayoutHeaderComponent {
  authService: AuthService = inject(AuthService);
  token_key: string | null = '';

  link1: string = 'testApi';
  link2: string = 'Галерея';
  link3: string = 'О лаборатории';
  link4: string = 'Контакты';
  logo_icon: string = 'icons/logo.svg';
  search_icon: string = 'icons/search.svg';
  login_icon: string = 'icons/log-in.svg';

  //

  hiddenClass = 'hidden_header nodisplay';
  header_blur = '';

  // Scroll event

  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > 0) {
      this.hiddenClass = 'scrolled nodisplay';
    } else {
      this.hiddenClass = 'hidden_header nodisplay';
    }
  }

  // AUTH

  ngOnInit() {
    this.Tokenasd();
  }

  Tokenasd() {
    return this.token_key = this.authService.getToken();
  }

}
