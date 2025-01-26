import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutHeaderComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },

  { path: 'login', component: LoginPageComponent },
];
