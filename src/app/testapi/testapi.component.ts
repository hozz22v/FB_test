import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-testapi',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './testapi.component.html',
  styleUrl: './testapi.component.css',
})
export class TestapiComponent {
  ApiService = Inject(TestapiComponent);
}
