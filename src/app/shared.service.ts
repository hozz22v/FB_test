import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private IsModalVisible = new BehaviorSubject<boolean>(false)
  ModalVisibility = this.IsModalVisible.asObservable();

  constructor() {}

    // ModalShow(Visible: boolean){
    //   this.IsModalVisible.next(Visible);
    // }

}
