import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
register();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

