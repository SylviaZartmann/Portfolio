import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderNaviService {
  private clickSubject = new Subject<void>();

  click$ = this.clickSubject.asObservable();

  triggerClick() {
    this.clickSubject.next();
  }
}
