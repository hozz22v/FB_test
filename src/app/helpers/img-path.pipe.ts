import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPath',
  standalone: true,
})
export class ImgPathPipe implements PipeTransform {
  transform(value: string | null): string | null{
    if (value) {
      return `/${value}`;
    }
    else return null;
  }
}
