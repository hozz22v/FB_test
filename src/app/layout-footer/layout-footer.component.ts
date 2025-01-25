import { Component } from '@angular/core';
import { ImgPathPipe } from '../helpers/img-path.pipe';

@Component({
  selector: 'app-layout-footer',
  standalone: true,
  imports: [ImgPathPipe],
  templateUrl: './layout-footer.component.html',
  styleUrl: './layout-footer.component.css'
})
export class LayoutFooterComponent {
  icon_yt = 'icons/Frame.svg';
  icon_inst = 'icons/Frame (1).svg';
  icon_Fb = 'icons/Frame (2).svg';
  icon_x = 'icons/Frame (3).svg';
}
